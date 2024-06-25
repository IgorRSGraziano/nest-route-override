import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':id')
  getUser(@Param('id') id: string) {
    return `User ${id}`;
  }
}
