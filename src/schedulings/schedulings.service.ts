import { Injectable } from '@nestjs/common';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SchedulingsService {
  constructor(private prisma: PrismaService) {}

  create(createSchedulingDto: CreateSchedulingDto) {
    return this.prisma.scheduling.create({
      data: createSchedulingDto,
    })
  }

  findAll() {
    return this.prisma.scheduling.findMany({
      include: {
        vehicle: true,
        activity: true,
        user: true,
      },
    })
  }

  findOne(id: number) {
    return this.prisma.scheduling.findUnique({
      where: { id },
      include: {
        vehicle: true,
        activity: true,
        user: true
      },
    })
  }

  update(id: number, updateSchedulingDto: UpdateSchedulingDto) {
    return this.prisma.scheduling.update({
      where: { id },
      data: updateSchedulingDto
    })
  }

  remove(id: number) {
    return this.prisma.scheduling.delete({
      where: { id }
    })
  }
}
