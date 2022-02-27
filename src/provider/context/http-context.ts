import { Injectable } from '@nestjs/common';
import * as httpContext from 'express-http-context';

@Injectable()
export class RequestContextProvider {
  public readonly REQUEST_ID = 'requestid';

  get(key) {
    return httpContext.get(key);
  }

  set(key, value) {
    return httpContext.set(key, value);
  }
}
