import { Module } from '@nestjs/common';
import { ResourceUsersService } from './resource-users.service';
import { ResourceUsersController } from './resource-users.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [ResourceUsersController],
  providers: [ResourceUsersService],
  imports: [AuthModule],
})
export class ResourceUsersModule {}
