import { Transform, TransformFnParams } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  password: string;
}
