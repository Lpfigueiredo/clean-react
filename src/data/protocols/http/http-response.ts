/* eslint-disable no-unused-vars */
export enum HttpStatusCode {
  OK = 200,
  NO_CONTENT = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
