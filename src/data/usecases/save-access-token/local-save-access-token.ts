import { SaveAccessToken } from '../../../domain/usecases/save-access-token'
import { SetStorage } from '../../protocols/cache/set-storage'

export class LocalSaveAccessToken implements SaveAccessToken {
  private readonly setStorage: SetStorage

  constructor(setStorage: SetStorage) {
    this.setStorage = setStorage
  }

  async save(accessToken: string): Promise<void> {
    await this.setStorage.set('accessToken', accessToken)
    return Promise.resolve()
  }
}
