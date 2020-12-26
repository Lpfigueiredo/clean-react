import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse
} from '../../../data/protocols/http'
import { AuthenticationParams } from '../../../domain/usecases'
import { AccountModel } from '../../../domain/models'
import axios, { AxiosError } from 'axios'

// eslint-disable-next-line prettier/prettier
export class AxiosHttpClient implements HttpPostClient<AuthenticationParams, AccountModel> {
  async post(
    params: HttpPostParams<AuthenticationParams>
  ): Promise<HttpResponse<AccountModel>> {
    try {
      const httpResponse = await axios.post(params.url, params.body)
      return {
        statusCode: httpResponse.status,
        body: httpResponse.data as AccountModel
      }
    } catch (error) {
      return {
        statusCode: (error as AxiosError).response?.status || 500,
        body: (error as AxiosError).response?.data as AccountModel
      }
    }
  }
}
