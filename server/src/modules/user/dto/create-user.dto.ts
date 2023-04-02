import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
  Validate,
} from 'class-validator';
import { ValidateEmail } from '../../../custom_validations/validateEmail.validation';

export class CreateUserDto {
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @IsEmail()
  @Validate(ValidateEmail)
  email: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\-\_\^&\*])(?=.{8,})/,
    {
      message:
        'Password must have at least one digit,one special character like $,@,%,#,-,_,^,!, one small letter and one capital letter.',
    },
  )
  password: string;
}
