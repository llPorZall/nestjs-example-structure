export const CUSTOMER_SERVICE_PROVIDER = 'CUSTOMER_SERVICE_PROVIDER';
import { CreateCustomerDto, SearchCustomerDto } from '../dto';
export interface CustomerInterface {
  createCustomer(customer: CreateCustomerDto): Promise<CreateCustomer>;
  searchCustomer(query: SearchCustomerDto): Promise<[Customer]>;
}
export interface CreateCustomer {
  customerId: string;
}

export interface Customer {
  customerId: string;
  firstName: string;
  lastName: string;
}
