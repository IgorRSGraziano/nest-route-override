import { PartialType } from '@nestjs/mapped-types';
import { CreateResourceUserDto } from './create-resource-user.dto';

export class UpdateResourceUserDto extends PartialType(CreateResourceUserDto) {}
