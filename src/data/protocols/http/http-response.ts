export enum HttpStatusCode {
  OK = 200,
  NOCONTENT = 201,
  BADREQUEST = 400,
  UNAUTHORIZED = 401,
  NOTFOUND = 404,
  SERVERERROR = 500
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: Record<string, unknown>
}
