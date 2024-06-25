import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourceUsersService } from './resource-users.service';
import { CreateResourceUserDto } from './dto/create-resource-user.dto';
import { UpdateResourceUserDto } from './dto/update-resource-user.dto';

@Controller('resource-users')
export class ResourceUsersController {
  constructor(private readonly resourceUsersService: ResourceUsersService) {}

  @Post()
  create(@Body() createResourceUserDto: CreateResourceUserDto) {
    return this.resourceUsersService.create(createResourceUserDto);
  }

  @Get()
  findAll() {
    return this.resourceUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourceUserDto: UpdateResourceUserDto) {
    return this.resourceUsersService.update(+id, updateResourceUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceUsersService.remove(+id);
  }
}
