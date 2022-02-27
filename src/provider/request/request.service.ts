import { Inject, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import * as util from 'util';
import * as qs from 'qs';
import { RequestContextProvider } from '../context/http-context';

export class RequestService {
  private readonly logger = new Logger('RequestService');
  constructor(
    @Inject(RequestContextProvider)
    private readonly requestContextProvider: RequestContextProvider,
  ) {}

  public async get(url: string, data?: any, headers?: any): Promise<any> {
    headers = headers || {};
    try {
      headers.requestid = await this.requestContextProvider.get('requestid');
      this.logger.debug(
        `[GET] data with url => ${url}\ndata => ${util.inspect(data, {
          colors: true,
          compact: false,
        })}\nheaders => ${util.inspect(headers, {
          colors: true,
          compact: false,
        })}`,
      );
      const options = {
        headers,
        params: data,
      };
      const result = await axios.get(url, options);
      this.logger.debug(
        `Result => ${util.inspect(result.data, {
          colors: true,
          compact: false,
        })}`,
      );
      return result.data;
    } catch (error) {
      this.logger.error(
        `ERROR => ${util.inspect(error, {
          colors: true,
          compact: false,
        })}`,
      );
      return error;
    }
  }
  public async post(url: string, data?: any, headers?: any): Promise<any> {
    headers = headers || {};
    try {
      headers.requestid = await this.requestContextProvider.get('requestid');
      this.logger.debug(
        `[POST] data with url => ${url}\ndata => ${util.inspect(data, {
          colors: true,
          compact: false,
        })}\nheaders => ${util.inspect(headers, {
          colors: true,
          compact: false,
        })}`,
      );
      const result = await axios.post(url, data, { headers });
      this.logger.debug(
        `Result => ${util.inspect(result.data, {
          colors: true,
          compact: false,
        })}`,
      );
      return result.data;
    } catch (error) {
      this.logger.error(
        `ERROR => ${util.inspect(error, {
          colors: true,
          compact: false,
        })}`,
      );
      return error;
    }
  }

  public async put(url: string, data?: any, headers?: any): Promise<any> {
    headers = headers || {};
    try {
      headers.requestid = await this.requestContextProvider.get('requestid');
      this.logger.debug(
        `[PUT] data with url => ${url}\ndata => ${util.inspect(data, {
          colors: true,
          compact: false,
        })}\nheaders => ${util.inspect(headers, {
          colors: true,
          compact: false,
        })}`,
      );
      const result = await axios.put(url, data, { headers });
      this.logger.debug(
        `Result => ${util.inspect(result.data, {
          colors: true,
          compact: false,
        })}`,
      );
      return result.data;
    } catch (error) {
      this.logger.error(
        `ERROR => ${util.inspect(error, {
          colors: true,
          compact: false,
        })}`,
      );
      return error;
    }
  }

  public async patch(url: string, data: any, headers?: any): Promise<any> {
    headers = headers || {};
    try {
      headers.requestid = await this.requestContextProvider.get('requestid');
      this.logger.debug(
        `[PATCH] data with url => ${url}\ndata => ${util.inspect(data, {
          colors: true,
          compact: false,
        })}\nheaders => ${util.inspect(headers, {
          colors: true,
          compact: false,
        })}`,
      );
      const result = await axios.patch(url, data, { headers });
      this.logger.debug(
        `Result => ${util.inspect(result.data, {
          colors: true,
          compact: false,
        })}`,
      );
      return result.data;
    } catch (error) {
      this.logger.error(
        `ERROR => ${util.inspect(error, {
          colors: true,
          compact: false,
        })}`,
      );
      return error;
    }
  }

  public async delete(url: string, data: any, headers: any): Promise<any> {
    headers = headers || {};
    try {
      headers.requestid = await this.requestContextProvider.get('requestid');
      this.logger.debug(
        `[DEL] data with url => ${url}\ndata => ${util.inspect(data, {
          colors: true,
          compact: false,
        })}\nheaders => ${util.inspect(headers, {
          colors: true,
          compact: false,
        })}`,
      );
      const options = {
        headers,
        data: qs.stringify(data),
      };
      const result = await axios.delete(url, options);
      this.logger.debug(
        `Result => ${util.inspect(result.data, {
          colors: true,
          compact: false,
        })}`,
      );
      return result.data;
    } catch (error) {
      this.logger.error(
        `ERROR => ${util.inspect(error, {
          colors: true,
          compact: false,
        })}`,
      );
      return error;
    }
  }
}
