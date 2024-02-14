import { ApiProperty } from '@nestjs/swagger';
import { Scheduling } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class SchedulingEntity implements Scheduling {
    constructor(partial: Partial<SchedulingEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    vehicleId: number;

    @ApiProperty()
    activityId: number;

    @ApiProperty()
    toDate: Date;

    @ApiProperty()
    finished: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}