import { Injectable } from '@nestjs/common';
import { CreateResourceUserDto } from './dto/create-resource-user.dto';
import { UpdateResourceUserDto } from './dto/update-resource-user.dto';

@Injectable()
export class ResourceUsersService {
  create(createResourceUserDto: CreateResourceUserDto) {
    return 'This action adds a new resourceUser';
  }

  findAll() {
    return `This action returns all resourceUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourceUser`;
  }

  update(id: number, updateResourceUserDto: UpdateResourceUserDto) {
    return `This action updates a #${id} resourceUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourceUser`;
  }
}
