import { Injectable } from '@nestjs/common';
import { CreateSocialpostDto } from './dto/create-socialpost.dto';
import { UpdateSocialpostDto } from './dto/update-socialpost.dto';

@Injectable()
export class SocialpostsService {
  create(createSocialpostDto: CreateSocialpostDto) {
    return 'This action adds a new socialpost';
  }

  findAll() {
    return `This action returns all socialposts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialpost`;
  }

  update(id: number, updateSocialpostDto: UpdateSocialpostDto) {
    return `This action updates a #${id} socialpost`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialpost`;
  }
}
