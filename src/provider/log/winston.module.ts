import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { RequestContextProvider } from '../context/http-context';
import * as winston from 'winston';
import { ContextModule } from './../context/context.module';
import { isEmpty } from 'lodash';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      imports: [ContextModule],
      useFactory: (requestContextProvider: RequestContextProvider) => ({
        exitOnError: false,
        level: process.env.LOG_LEVEL,
        format: winston.format.combine(
          winston.format.label({ label: 'main' }),
          winston.format.timestamp(),
          winston.format.json(),
        ),
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.label({ label: 'main' }),
              winston.format.timestamp(),
              winston.format.printf((info) => {
                let str = `${info.timestamp} (${requestContextProvider.get(
                  requestContextProvider.REQUEST_ID,
                )}) [${info.context}] [${info.level}]: ${info.message}`;
                if (info.headers)
                  str += `\n[Header]: ${JSON.stringify(info.headers)}`;
                if (info.body && !isEmpty(info.body))
                  str += `\n[Body]: ${JSON.stringify(info.body)}`;
                return str;
              }),
            ),
          }),
        ],
      }),
      inject: [RequestContextProvider],
    }),
  ],
})
export class WinstonCustomModule {}
