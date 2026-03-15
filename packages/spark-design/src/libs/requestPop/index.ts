import { stringify } from 'query-string';

export interface BaseResponse<T> {
  /**
   * 状态码
   */
  code: string;
  /**
   * 请求结果
   */
  data: T;

  /**
   * 请求id
   */
  requestId: string;

  /**
   * 是否成功的response
   */
  successResponse: boolean;
}

export type RequestOptions = AliyunPopOptions & Omit<RequestInit, 'method'>;

/**
 * 阿里云pop请求配置参数
 */
export interface AliyunPopOptions {
  /**
   * 请求action
   */
  action: string;
  /**
   * 产品名称如sfm_bailian
   */
  product: string;
  /**
   * 区域如cn-hangzhou
   */
  region?: string;
  /**
   * 请求地址， 默认/data/api.json
   */
  url?: string;
  /**
   * 版本号
   */
  version?: string;
}

interface Request {
  <T = any, D = any>(
    options: RequestOptions,
    data?: D,
    extraParams?: Record<string, any>,
  ): Promise<T>;
}

/**
 * 阿里云pop请求
 */
const requestPop = async function requestPop<T = any, D extends object = any>(
  options: RequestOptions,
  /**
   * 请求参数
   */
  data?: D,
  /**
   * 其他参数
   * 如{content: "xxx"}
   */
  extraParams?: Record<string, any>,
): Promise<T> {
  const {
    product,
    action,
    url,
    version,
    region,
    headers = {},
    ...rest
  } = options;
  let currentUrl = `${
    url || '/data/api.json'
  }?action=${action}&product=${product}`;
  if (version) {
    currentUrl += `&version=${version}`;
  }
  const newData: Record<string, any> = {
    sec_token: window.ALIYUN_CONSOLE_CONFIG?.SEC_TOKEN || '',
    region: region,
  };
  if (data) {
    newData.params = JSON.stringify(data);
  }
  if (extraParams) {
    Object.assign(newData, extraParams);
  }
  const postOptions: RequestInit = {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      ...headers,
    },
    ...rest,
  };

  const params: any = Object.assign({}, postOptions);
  params.body = stringify(newData);
  const response: any = await fetch(currentUrl, params);
  const json = await response.json();

  if (json.code !== '200' && !json.successResponse) {
    return Promise.reject(json);
  }
  return json as T;
} as Request;

export default requestPop;
