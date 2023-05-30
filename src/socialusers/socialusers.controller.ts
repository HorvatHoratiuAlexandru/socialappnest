import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialusersService } from './socialusers.service';
import { CreateSocialuserDto } from './dto/create-socialuser.dto';
import { UpdateSocialuserDto } from './dto/update-socialuser.dto';


@Controller('socialusers')
export class SocialusersController {
  constructor(private readonly socialusersService: SocialusersService) {}

  @Post()
  create(@Body() createSocialuserDto: CreateSocialuserDto) {
    console.log(createSocialuserDto)
    return this.socialusersService.create(createSocialuserDto);
  }

  @Get()
  findAll() {
    return this.socialusersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialusersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialuserDto: UpdateSocialuserDto) {
    return this.socialusersService.update(+id, updateSocialuserDto);
  }

}
