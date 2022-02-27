import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateCustomerDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
