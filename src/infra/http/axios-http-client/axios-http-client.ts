import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse
} from '../../../data/protocols/http'
import { AuthenticationParams } from '../../../domain/usecases'
import { AccountModel } from '../../../domain/models'
import axios from 'axios'

// eslint-disable-next-line prettier/prettier
export class AxiosHttpClient implements HttpPostClient<AuthenticationParams, AccountModel> {
  async post(
    params: HttpPostParams<AuthenticationParams>
  ): Promise<HttpResponse<AccountModel>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data as AccountModel
    }
  }
}
