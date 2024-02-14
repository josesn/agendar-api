import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ActivityEntity } from './entities/activity.entity';

@ApiTags('activities')
@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @ApiCreatedResponse({ type: ActivityEntity })
  @Post()
  async create(@Body() createActivityDto: CreateActivityDto) {
    return new ActivityEntity(await this.activitiesService.create(createActivityDto));
  }

  @ApiCreatedResponse({ type: ActivityEntity, isArray: true })
  @Get()
  async findAll() {
    const activities = await this.activitiesService.findAll();
    return activities.map((activity) => new ActivityEntity(activity))
  }

  @ApiCreatedResponse({ type: ActivityEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new ActivityEntity(await this.activitiesService.findOne(id));
  }

  @ApiCreatedResponse({ type: ActivityEntity })
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateActivityDto: UpdateActivityDto) {
    return new ActivityEntity(await this.activitiesService.update(id, updateActivityDto));
  }

  @ApiCreatedResponse({ type: ActivityEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new ActivityEntity(await this.activitiesService.remove(id));
  }
}
