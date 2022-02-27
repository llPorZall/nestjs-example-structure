import { Module } from '@nestjs/common';
import { RequestContextProvider } from './http-context';

@Module({
  providers: [RequestContextProvider],
  exports: [RequestContextProvider],
})
export class ContextModule {}
