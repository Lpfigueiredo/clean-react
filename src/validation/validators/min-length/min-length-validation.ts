import { InvalidFieldError } from '../../errors'
import { FieldValidation } from '../../protocols/field-validation'

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {
    this.field = field
    this.minLength = minLength
  }

  validate(value: string): null | Error {
    return value.length >= this.minLength ? null : new InvalidFieldError()
  }
}
