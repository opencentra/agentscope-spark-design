import delay from '../delay';
import type { EventSourceMessage } from './parse';
import { getBytes, getLines, getMessages } from './parse';
export const EventStreamContentType = 'text/event-stream';

const DefaultRetryInterval = 1000;
const LastEventId = 'last-event-id';

export interface FetchEventSourceInit extends RequestInit {
  /**
   * The request headers. FetchEventSource only supports the Record<string,string> format.
   */
  headers?: Record<string, string>;

  /**
   * Called when a response is received. Use this to validate that the response
   * actually matches what you expect (and throw if it doesn't.) If not provided,
   * will default to a basic validation to ensure the content-type is text/event-stream.
   */
  onopen?: (response: Response) => Promise<void>;

  /**
   * Called when a message is received. NOTE: Unlike the default browser
   * EventSource.onmessage, this callback is called for _all_ events,
   * even ones with a custom `event` field.
   */
  onmessage?: (ev: EventSourceMessage) => void;

  /**
   * Called when a response finishes. If you don't expect the server to kill
   * the connection, you can throw an exception here and retry using onerror.
   */
  onclose?: () => void;

  /**
   * Called when there is any error making the request / processing messages /
   * handling callbacks etc. Use this to control the retry strategy: if the
   * error is fatal, rethrow the error inside the callback to stop the entire
   * operation. Otherwise, you can return an interval (in milliseconds) after
   * which the request will automatically retry (with the last-event-id).
   * If this callback is not specified, or it returns undefined, fetchEventSource
   * will treat every error as retriable and will try again after 1 second.
   */
  onerror?: (err: any) => number | null | undefined | void;

  /** The Fetch function to use. Defaults to window.fetch */
  fetch?: typeof fetch;

  /** 出错时自动重试次数，默认0 */
  autoRetryTime?: number;
  /** 超时时间，单位毫秒，默认60*1000 */
  timeout?: number;
  /** 是否debug模式，debug模式时会输出跟多详细日志 */
  debug?: boolean;
}

/**
 * sse请求
 */
export default async function requestSse(
  input: RequestInfo,
  {
    signal: inputSignal,
    headers: inputHeaders,
    onopen: inputOnOpen,
    onmessage,
    onclose,
    onerror,
    fetch: inputFetch,
    autoRetryTime,
    timeout,
    debug = false,
    ...rest
  }: FetchEventSourceInit,
): Promise<void> {
  let retryTime = 0;
  return new Promise<void>((resolve, reject) => {
    // make a copy of the input headers since we may modify it below:
    const headers = { ...inputHeaders };
    if (!headers.accept) {
      headers.accept = EventStreamContentType;
    }

    let retryInterval = DefaultRetryInterval;
    let retryTimer = 0;
    let timeoutTimer = 0;
    let localControl: AbortController | null = new AbortController();
    function dispose(passAbort = false) {
      if (debug) {
        console.log('[sse] dispose');
      }
      window.clearTimeout(retryTimer);
      window.clearTimeout(timeoutTimer);
      if (!passAbort) {
        localControl?.abort?.();
      }
    }
    function newTimeout() {
      window.clearTimeout(timeoutTimer);
      if (timeout === 0) {
        return;
      }
      timeoutTimer = window.setTimeout(() => {
        if (debug) {
          console.log('[sse] timeout');
        }
        reject(new Error('timeout'));
        onerror?.(new Error('timeout'));
        dispose();
      }, timeout || 60 * 1000);
    }
    // if the incoming signal aborts, dispose resources and resolve:
    inputSignal?.addEventListener('abort', () => {
      dispose();
      resolve(); // don't waste time constructing/logging errors
    });

    const fetch = inputFetch ?? window.fetch;
    const onopen = inputOnOpen ?? defaultOnOpen;
    async function create() {
      try {
        newTimeout();
        const response = await fetch(input, {
          ...rest,
          headers,
          signal: localControl?.signal,
        });
        await onopen(response);
        if (!response.body) {
          if (debug) {
            console.log('[sse]no body, delay 100ms');
          }
          // 不存在response.body时，先延迟一下
          await delay(100);
        }
        if (debug) {
          console.log('[sse]response.body', response.body);
        }
        await getBytes(
          response.body!,
          getLines(
            getMessages(
              (id) => {
                if (id) {
                  // store the id and send it back on the next retry:
                  headers[LastEventId] = id;
                } else {
                  // don't send the last-event-id header anymore:
                  delete headers[LastEventId];
                }
              },
              (retry) => {
                retryInterval = retry;
              },
              (ev) => {
                newTimeout();
                onmessage?.(ev);
              },
            ),
          ),
        );
        localControl = null;
        onclose?.();
        dispose();
        resolve();
      } catch (err) {
        if (err) {
          console.error('[sse]err', err);
        }
        if (
          !inputSignal?.aborted &&
          autoRetryTime &&
          retryTime < autoRetryTime
        ) {
          // if we haven't aborted the request ourselves:
          try {
            retryTime += 1;
            // check if we need to retry:
            const interval: any = onerror?.(err) ?? retryInterval;
            window.clearTimeout(retryTimer);
            if (typeof interval === 'number') {
              if (debug) {
                console.log('[sse] retry ' + retryTime);
              }
              retryTimer = window.setTimeout(create, interval);
            }
            return Promise.resolve();
          } catch (innerErr) {
            // we should not retry anymore:
            if (debug) {
              console.log('[sse] reject innerErr ', innerErr);
            }
            dispose();
            reject(innerErr);
          }
        } else {
          if (debug) {
            console.log('[sse] reject finally');
          }
          dispose(
            err instanceof Response ||
              (err instanceof DOMException && err.name === 'AbortError'),
          );
          onerror?.(err);
          reject(err);
        }
      }
    }

    create();
  });
}

function defaultOnOpen(response: Response) {
  const contentType = response.headers.get('content-type');
  if (!contentType?.startsWith(EventStreamContentType)) {
    throw new Error(
      `Expected content-type to be ${EventStreamContentType}, Actual: ${contentType}`,
    );
  }
}
