import { Module } from '@nestjs/common';
import { SchedulingsService } from './schedulings.service';
import { SchedulingsController } from './schedulings.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SchedulingsController],
  providers: [SchedulingsService, PrismaService],
})
export class SchedulingsModule {}
