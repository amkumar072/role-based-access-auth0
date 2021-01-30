import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { auth, ConfigParams, OpenidRequest } from 'express-openid-connect';

const config: ConfigParams = {
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  secret: process.env.SECRET,
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {

    auth(config);
    return this.appService.getHello();
  }
}
