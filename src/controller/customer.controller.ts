import { Body, Controller, Get, Inject, Logger, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { CustomerService } from 'src/module/customer/customer.service';
import { CreateCustomerDto, SearchCustomerDto } from 'src/module/customer/dto';
import {
  CreateCustomer,
  Customer,
  CustomerInterface,
  CUSTOMER_SERVICE_PROVIDER,
} from 'src/module/customer/interface';

@Controller('customers')
export class CustomerController {
  private readonly logger = new Logger('CustomerController');
  constructor(
    @Inject(CUSTOMER_SERVICE_PROVIDER)
    private readonly customerService: CustomerInterface,
  ) {}

  @Get('/')
  async searchCustomer(@Query() query: SearchCustomerDto): Promise<[Customer]> {
    return await this.customerService.searchCustomer(query);
  }
  @Post('/customers')
  async createCustomer(
    @Body() body: CreateCustomerDto,
  ): Promise<CreateCustomer> {
    return await this.customerService.createCustomer(body);
  }
}
