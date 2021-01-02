import { SetStorage } from '../protocols/cache/set-storage'

export class SetStorageMock implements SetStorage {
  key = ''
  value = ''

  async set(key: string, value: string): Promise<void> {
    this.key = key
    this.value = value
    return Promise.resolve()
  }
}
