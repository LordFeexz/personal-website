import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import type {
  BaseResponse,
  BaseResponseWithPagination,
} from "@/interfaces/request";

export interface Query {
  url: string;
  headers?: any;
  params?: any;
}

export interface Mutation {
  url: string;
  headers?: any;
  params?: any;
  method: "POST" | "PATCH" | "DELETE" | "PUT";
  data?: any;
}

class ThirdPartyRequest {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      validateStatus: (s) => s >= 200,
    });
  }

  public async Query<T = any>({
    url,
    headers,
    params,
  }: Query): Promise<AxiosResponse<BaseResponseWithPagination<T>>> {
    return this.client<BaseResponseWithPagination<T>>({
      url,
      headers,
      method: "GET",
      params,
    });
  }

  public async fetcher<T = any>(
    url: string
  ): Promise<AxiosResponse<BaseResponse<T>>> {
    return this.client<BaseResponse<T>>({ url, method: "GET" });
  }

  public async Mutation<T = any>({
    url,
    headers,
    data,
    method,
    params,
  }: Mutation): Promise<AxiosResponse<BaseResponse<T>>> {
    return this.client<BaseResponse<T>>({
      url,
      headers,
      method,
      data,
      params,
    });
  }
}

const request = new ThirdPartyRequest();

export default request;
