import { FieldValidation } from '../../protocols/field-validation'
import { RequiredFieldValidation } from '../../validators'

export class ValidationBuilder {
  private readonly fieldName: string
  private readonly validations: FieldValidation[]

  private constructor(fieldName: string, validations: FieldValidation[]) {
    this.fieldName = fieldName
    this.validations = validations
  }

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
