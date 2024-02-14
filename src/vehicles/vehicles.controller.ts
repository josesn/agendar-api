import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { VehicleEntity } from './entities/vehicle.entity';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @ApiCreatedResponse({ type: VehicleEntity })
  @Post()
  async create(@Body() createVehicleDto: CreateVehicleDto) {
    return new VehicleEntity(await this.vehiclesService.create(createVehicleDto));
  }

  @ApiCreatedResponse({ type: VehicleEntity, isArray: true })
  @Get()
  async findAll() {
    const vehicles = await this.vehiclesService.findAll()
    return vehicles.map((vehicle) => new VehicleEntity(vehicle))
  }

  @ApiCreatedResponse({ type: VehicleEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new VehicleEntity(await this.vehiclesService.findOne(id));
  }

  @ApiCreatedResponse({ type: VehicleEntity })
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateVehicleDto: UpdateVehicleDto) {
    return new VehicleEntity(await this.vehiclesService.update(id, updateVehicleDto));
  }

  @ApiCreatedResponse({ type: VehicleEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new VehicleEntity(await this.vehiclesService.remove(id));
  }
}
