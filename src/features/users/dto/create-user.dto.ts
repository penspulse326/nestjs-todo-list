import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  account!: string;

  @MaxLength(20)
  @MinLength(6)
  password!: string;

  @IsNotEmpty()
  @IsString()
  username!: string;
}
