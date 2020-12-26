import { FieldValidation } from '../protocols/field-validation'

export class FieldValidationSpy implements FieldValidation {
  readonly field: string
  error: Error | null = null

  constructor(field: string) {
    this.field = field
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(value: string): Error | null {
    return this.error
  }
}
