import { Module } from '@nestjs/common';
import { WinstonCustomModule } from './winston.module';

@Module({
  imports: [WinstonCustomModule],
})
export class LoggerModule {}
