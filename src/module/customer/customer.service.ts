import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateCustomerDto, SearchCustomerDto } from './dto';
import { CreateCustomer, Customer, CustomerInterface } from './interface';
@Injectable()
export class CustomerService implements CustomerInterface {
  private readonly logger = new Logger('CustomerService');

  async createCustomer(customer: CreateCustomerDto): Promise<CreateCustomer> {
    const customerRes: CreateCustomer = {
      customerId: '1234',
    };
    return customerRes;
  }
  async searchCustomer(query: SearchCustomerDto): Promise<[Customer]> {
    const { page, limit } = query;
    const customer: Customer = {
      customerId: '1234',
      firstName: 'Pongchai',
      lastName: 'Tang',
    };
    const customers: [Customer] = [customer];
    return customers;
  }
}
