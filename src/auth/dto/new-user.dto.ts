import { IsEmail, IsString } from "class-validator";

export class NewUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;
}