import { InvalidCredentialsError, UnexpectedError } from '../../../domain/errors'
import { AccountModel } from '../../../domain/models'
import { Authentication, AuthenticationParams } from '../../../domain/usecases'
import { HttpPostClient, HttpStatusCode } from '../../protocols/http'

export class RemoteAuthentication implements Authentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>) {
    this.url = url
    this.httpPostClient = httpPostClient
  }

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
        return httpResponse.body || { accessToken: '' }
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
