import { SaveAccessToken } from '../../domain/usecases'

export class SaveAccessTokenMock implements SaveAccessToken {
  accessToken = ''

  async save(accessToken: string): Promise<void> {
    this.accessToken = accessToken
    return Promise.resolve()
  }
}
