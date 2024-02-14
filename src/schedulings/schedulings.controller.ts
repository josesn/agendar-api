import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { SchedulingsService } from './schedulings.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';

import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SchedulingEntity } from './entities/scheduling.entity';

@ApiTags('schedulings')
@Controller('schedulings')
export class SchedulingsController {
  constructor(private readonly schedulingsService: SchedulingsService) {}

  @ApiCreatedResponse({ type: SchedulingEntity })
  @Post()
  async create(@Body() createSchedulingDto: CreateSchedulingDto) {
    return new SchedulingEntity(await this.schedulingsService.create(createSchedulingDto));
  }

  @ApiCreatedResponse({ type: SchedulingEntity, isArray: true })
  @Get()
  
  async findAll() {
    const schedulings = await this.schedulingsService.findAll()
    return schedulings.map((scheduling) => new SchedulingEntity(scheduling))
  }

  @ApiCreatedResponse({ type: SchedulingEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new SchedulingEntity(await this.schedulingsService.findOne(id));
  }

  @ApiCreatedResponse({ type: SchedulingEntity })
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateSchedulingDto: UpdateSchedulingDto) {
    return new SchedulingEntity(await this.schedulingsService.update(id, updateSchedulingDto));
  }

  @ApiCreatedResponse({ type: SchedulingEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new SchedulingEntity(await this.schedulingsService.remove(id));
  }
}
