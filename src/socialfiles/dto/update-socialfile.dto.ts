import { PartialType } from '@nestjs/swagger';
import { CreateSocialfileDto } from './create-socialfile.dto';

export class UpdateSocialfileDto extends PartialType(CreateSocialfileDto) {}
