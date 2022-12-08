import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
