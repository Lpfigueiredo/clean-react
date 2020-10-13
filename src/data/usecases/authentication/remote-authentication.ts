import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error'
import { UnexpectedError } from '../../../domain/errors/unexpected-error'
import { AuthenticationParams } from '../../../domain/usecases/authentication'
import { HttpPostClient } from '../../protocols/http/http-post-client'
import { HttpStatusCode } from '../../protocols/http/http-response'

export class RemoteAuthentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient) {
    this.url = url
    this.httpPostClient = httpPostClient
  }

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
        break
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
