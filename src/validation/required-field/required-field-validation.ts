import { RequiredFieldError } from '../errors'
import { FieldValidation } from '../protocols/field-validation'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {
    this.field = field
  }

  validate (value: string): null | Error {
    return value ? null : new RequiredFieldError()
  }
}
