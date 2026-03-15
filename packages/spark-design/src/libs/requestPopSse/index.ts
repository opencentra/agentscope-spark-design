import { stringify } from 'query-string';
import type { AliyunPopOptions, BaseResponse } from '../requestPop';
import requestPop from '../requestPop';
import fetchEventSource from '../requestSse';

export interface SseResponse {
  dispose: () => void;
}

interface SseTokenResponseData {
  /**
   * 请求domain地址
   */
  uri: string;
  /**
   * 请求路径
   */
  path: string;
  /**
   * 请求方法
   */
  method: string;
  /**
   * 请求query参数
   */
  query: Record<string, string>;
  /**
   * 请求header参数
   */
  headers: Record<string, string>;

  /**
   * 请求body参数
   */
  body: string;
}

export interface SseOptions<T> extends Omit<AliyunPopOptions, 'url'> {
  /**
   * sse请求参数
   */
  body: any;

  /**
   * 请求token的时候的参数
   */
  params?: Record<string, any>;

  /**
   * 超时时长
   */
  timeout?: number;

  /**
   * 发生错误时候的回掉函数
   * @param error 错误信息
   */
  onError?: (error: any) => void;

  /**
   * 发生消息时候的回调函数
   */
  onMessage?: (data: T) => void;

  /**
   * 关闭时候的回调函数
   */
  onClose?: () => void;
}

async function getSseToken<T>(options: SseOptions<T>) {
  const { action, body, product, version, region, params } = options;
  const tempOptions: AliyunPopOptions = {
    action,
    product,
    region,
    url: '/tool/sse/get.json',
    version,
  };
  return requestPop<BaseResponse<SseTokenResponseData>>(tempOptions, params, {
    content: JSON.stringify(body),
  });
}

function request<T = any>(
  tokenResult: SseTokenResponseData,
  options: SseOptions<T>,
  ctrl: AbortController,
  isFinish: { value: boolean },
) {
  const { onMessage, onClose, onError, timeout } = options;
  const { body, uri, headers, query, path } = tokenResult;
  const contentType = headers['Content-Type'];
  let sseUrl = `${uri.replace(/\/$/, '')}${path}`;
  if (query && Object.keys(query).length) {
    sseUrl = `${sseUrl}?${stringify(query)}`;
  }
  try {
    isFinish.value = false;
    fetchEventSource(sseUrl, {
      method: 'POST',
      body:
        contentType === 'application/x-www-form-urlencoded'
          ? new URLSearchParams(JSON.parse(body))
          : body,
      signal: ctrl.signal,
      timeout,
      headers,
      onopen: (response: Response) => {
        if (response.status !== 200) {
          return Promise.reject(response);
        }
        return Promise.resolve();
      },
      onmessage: (response) => {
        try {
          const { data = '{}' } = response;
          const parseData = JSON.parse(data);
          onMessage?.(parseData);
        } catch (error) {
          onError?.(error);
        }
      },
      onclose: () => {
        isFinish.value = true;
        onClose?.();
      },
      onerror: (error) => {
        isFinish.value = true;
        onClose?.();
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }
        onError?.(error);
      },
    });
  } catch (error) {
    isFinish.value = true;
    onError?.(error);
    onClose?.();
  }
}

async function popSseGetAndRequest<T = any>(
  options: SseOptions<T>,
  ctrl: AbortController,
  isFinish: { value: boolean },
) {
  const { onClose, onError } = options;
  try {
    const response = await getSseToken<T>(options);
    const result = response.data;
    request(result, options, ctrl, isFinish);
  } catch (error) {
    onClose?.();
    onError?.(error);
  }
}

/**
 * pop sse请求
 */
export default async function requestPopSse<T = any>(
  options: SseOptions<T>,
): Promise<SseResponse> {
  const ctrl = new AbortController();
  const isFinish = { value: true };
  await popSseGetAndRequest(options, ctrl, isFinish);
  return {
    dispose: () => {
      if (isFinish.value) {
        ctrl.abort('取消请求');
      }
    },
  };
}
