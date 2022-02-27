import { Module } from '@nestjs/common';

import { LoggerModule } from './provider/log/logger.module';
import { RequestModule } from './provider/request/request.module';
import { CustomerModule } from './module/customer/customer.module';
import { MongooseModule } from '@nestjs/mongoose';

import { CustomerController } from './controller/customer.controller';
@Module({
  imports: [
    LoggerModule,
    RequestModule,
    CustomerModule,
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
  controllers: [CustomerController],
  providers: [],
})
export class AppModule {}
