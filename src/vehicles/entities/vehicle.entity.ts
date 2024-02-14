import { ApiProperty } from '@nestjs/swagger';
import { Vehicle } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class VehicleEntity implements Vehicle {
    constructor(partial: Partial<VehicleEntity>) {
        Object.assign(this, partial);
    }
    
  @ApiProperty()
  id: number;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  plate: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  year: string;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}