import { RequiredFieldError } from '../errors'
import { FieldValidation } from '../protocols/field-validation'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {
    this.field = field
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate (value: string): null | Error {
    return new RequiredFieldError()
  }
}
