import { Controller, Get, Query, Redirect } from '@nestjs/common';

import { AppService } from './app.service';
import { CatsService } from './modules/cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private catsService: CatsService,
  ) {}

  @Get()
  getHello() {
    return this.catsService.findAll();
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
