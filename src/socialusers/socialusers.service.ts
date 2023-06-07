import { Injectable, Logger } from '@nestjs/common';
import { CreateSocialuserDto } from './dto/create-socialuser.dto';
import { UpdateSocialuserDto } from './dto/update-socialuser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Socialuser } from './entities/socialuser.entity';
import { Repository } from 'typeorm';
import { EncodePassword } from 'src/utils/crypt';
import { Profile } from 'src/profiles/entities/profile.entity';

@Injectable()
export class SocialusersService {
  private readonly logger = new Logger(SocialusersService.name)

  constructor(
    @InjectRepository(Socialuser)private userRepo: Repository<Socialuser>,
    @InjectRepository(Profile)private profileRepo: Repository<Profile>,
  ){}
  
  async create(createSocialuserDto: CreateSocialuserDto) {
    this.logger.log('Creating new user', createSocialuserDto);

    const password = EncodePassword(createSocialuserDto.password);
    
    const profile = await this.profileRepo.save(this.profileRepo.create());
    this.logger.log('profile created', profile)

    const newUser: Socialuser = this.userRepo.create({...createSocialuserDto, password, profile});
    this.userRepo.save(newUser);
    return newUser;
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneOrFail({where: {id: id}});
  }

  findOneByUsername(username: string) {
    return this.userRepo.findOneOrFail({where: {username: username}});
  }

  update(id: number, updateSocialuserDto: UpdateSocialuserDto) {
    return this.userRepo.update(id, updateSocialuserDto);
  }
}
