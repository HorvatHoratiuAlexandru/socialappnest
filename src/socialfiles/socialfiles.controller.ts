import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialfilesService } from './socialfiles.service';
import { CreateSocialfileDto } from './dto/create-socialfile.dto';
import { UpdateSocialfileDto } from './dto/update-socialfile.dto';

@Controller('socialfiles')
export class SocialfilesController {
  constructor(private readonly socialfilesService: SocialfilesService) {}

  @Post()
  create(@Body() createSocialfileDto: CreateSocialfileDto) {
    return this.socialfilesService.create(createSocialfileDto);
  }

  @Get()
  findAll() {
    return this.socialfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialfilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialfileDto: UpdateSocialfileDto) {
    return this.socialfilesService.update(+id, updateSocialfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialfilesService.remove(+id);
  }
}
