import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialpostDto } from './create-socialpost.dto';

export class UpdateSocialpostDto extends PartialType(CreateSocialpostDto) {}
