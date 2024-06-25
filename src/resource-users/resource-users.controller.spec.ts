import { Test, TestingModule } from '@nestjs/testing';
import { ResourceUsersController } from './resource-users.controller';
import { ResourceUsersService } from './resource-users.service';

describe('ResourceUsersController', () => {
  let controller: ResourceUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceUsersController],
      providers: [ResourceUsersService],
    }).compile();

    controller = module.get<ResourceUsersController>(ResourceUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
