export enum HttpStatusCode {
  NOCONTENT = 201,
  UNAUTHORIZED = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: Record<string, unknown>
}
