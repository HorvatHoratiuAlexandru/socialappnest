import { PartialType } from '@nestjs/swagger';
import { CreateSocialuserDto } from './create-socialuser.dto';

export class UpdateSocialuserDto extends PartialType(CreateSocialuserDto) {}
