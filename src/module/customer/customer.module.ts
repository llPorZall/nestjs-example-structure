import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RequestModule } from '../../provider/request/request.module';
import { CustomerService } from './customer.service';
import { CUSTOMER_SERVICE_PROVIDER } from './interface';

@Module({
  imports: [ConfigModule, RequestModule],
  providers: [
    {
      provide: CUSTOMER_SERVICE_PROVIDER,
      useClass: CustomerService,
    },
  ],
  exports: [CUSTOMER_SERVICE_PROVIDER],
})
export class CustomerModule {}
