import { InvalidFieldError } from '../../errors'
import { FieldValidation } from '../../protocols/field-validation'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {
    this.field = field
    this.minLength = minLength
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate (value: string): null | Error {
    return new InvalidFieldError()
  }
}
