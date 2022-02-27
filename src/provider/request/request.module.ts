import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RequestContextProvider } from '../context/http-context';
import { RequestService } from './request.service';

@Module({
  imports: [ConfigModule],
  providers: [RequestService, RequestContextProvider],
  exports: [RequestService],
})
export class RequestModule {}
