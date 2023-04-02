import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../modules/user/user.service';

@ValidatorConstraint({ name: 'validateEmail', async: true })
export class ValidateEmail implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(email: any, _args: ValidationArguments) {
    try {
      const result = await this.userService.emailExists(email);
      return !result;
    } catch (error) {
      return false;
    }
  }

  defaultMessage(_args: ValidationArguments) {
    return 'Email already exists try with different';
  }
}
