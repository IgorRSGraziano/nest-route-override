import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { AuthModule } from './user/auth/auth.module';
import { ResourceUsersModule } from './resource-users/resource-users.module';

@Module({
  imports: [AuthModule, ResourceUsersModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
