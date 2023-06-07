import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, ParseFilePipe, FileTypeValidator, ParseFilePipeBuilder, UploadedFile, UseGuards } from '@nestjs/common';
import { SocialfilesService } from './socialfiles.service';
import { CreateSocialfileDto } from './dto/create-socialfile.dto';
import { UpdateSocialfileDto } from './dto/update-socialfile.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('file')
export class SocialfilesController {
  constructor(private readonly socialfilesService: SocialfilesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'), )
  create(
    @UploadedFiles(
      new ParseFilePipeBuilder()
      .addFileTypeValidator({fileType: new RegExp('([0-9a-zA-Z\/_-]+.(png|PNG|gif|GIF|jp[e]?g|JP[E]?G))')})
      
      .build(),
  ) 
  files: Array<Express.Multer.File>
  ) {

    return this.socialfilesService.bulkCreate(files);
  }

  

  @Post('test')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
  


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialfilesService.remove(+id);
  }

  @Get('test')
  test() {
    return 'testfile';
  }
}
