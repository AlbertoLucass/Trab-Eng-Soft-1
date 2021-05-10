import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AdminAuthGuard } from './auth/guards';

@ApiTags('Api')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  @ApiOkResponse({ description: 'hello world check' })
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AdminAuthGuard)
  @Post('auth/login')
  async adminLogin(@Request() req) {
    return this.authService.login(req.user);
  }
}
