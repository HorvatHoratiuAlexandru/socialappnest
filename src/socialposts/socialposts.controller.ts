import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialpostsService } from './socialposts.service';
import { CreateSocialpostDto } from './dto/create-socialpost.dto';
import { UpdateSocialpostDto } from './dto/update-socialpost.dto';

@Controller('socialposts')
export class SocialpostsController {
  constructor(private readonly socialpostsService: SocialpostsService) {}

  @Post()
  create(@Body() createSocialpostDto: CreateSocialpostDto) {
    return this.socialpostsService.create(createSocialpostDto);
  }

  @Get()
  findAll() {
    return this.socialpostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialpostsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialpostDto: UpdateSocialpostDto) {
    return this.socialpostsService.update(+id, updateSocialpostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialpostsService.remove(+id);
  }
}
