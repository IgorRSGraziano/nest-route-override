import { Controller, Get } from '@nestjs/common';

@Controller('user/auth')
export class AuthController {
  @Get()
  session() {
    return 'Session';
  }
}
