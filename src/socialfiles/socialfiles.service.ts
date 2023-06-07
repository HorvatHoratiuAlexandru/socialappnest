import { Injectable } from '@nestjs/common';
import { CreateSocialfileDto } from './dto/create-socialfile.dto';
import { UpdateSocialfileDto } from './dto/update-socialfile.dto';

@Injectable()
export class SocialfilesService {
  bulkCreate(files: Array<Express.Multer.File>) {
    return 'This action adds a new socialfile';
  }

  findAll() {
    return `This action returns all socialfiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialfile`;
  }

  update(id: number, updateSocialfileDto: UpdateSocialfileDto) {
    return `This action updates a #${id} socialfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialfile`;
  }
}
