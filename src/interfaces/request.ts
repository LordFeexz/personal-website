export type BaseResponse<T = any> = {
  data: T;
  message?: string;
  code: number;
  "Content-Type": string;
  Path: string;
};

export interface BaseQuery {
  page?: number;
  limit?: number;
}

export type BaseResponseWithPagination<T = any> = BaseResponse<T> & {
  totalData: number;
  limit: number;
  page: number;
  totalPage: number;
};

export type DataWithPagination<T = any> = {
  data: T;
  totalData: number;
  totalPage: number;
};
