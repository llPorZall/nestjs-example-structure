import { IsNotEmpty, IsNumber } from 'class-validator';

export class SearchCustomerDto {
  @IsNumber()
  @IsNotEmpty()
  page: number;

  @IsNumber()
  @IsNotEmpty()
  limit: number;
}
