import { Validation } from '../protocols/validation'

export class ValidationStub implements Validation {
  errorMessage = ''

  validate (): string {
    return this.errorMessage
  }
}
