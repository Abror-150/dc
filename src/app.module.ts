import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { UploadController } from './upload/upload.controller';

@Module({
  imports: [PrismaModule, AuthorModule, BookModule],
  controllers: [AppController, UploadController],
  providers: [AppService, UploadController],
})
export class AppModule {}
