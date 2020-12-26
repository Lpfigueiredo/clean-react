import { HttpPostParams } from '../protocols/http'
import faker from 'faker'
import { AuthenticationParams } from '../../domain/usecases'

export const mockPostRequest = (): HttpPostParams<AuthenticationParams> => ({
  url: faker.internet.url(),
  body: (faker.random.objectElement() as unknown) as AuthenticationParams
})
