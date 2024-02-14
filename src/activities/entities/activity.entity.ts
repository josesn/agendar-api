import { ApiProperty } from '@nestjs/swagger';
import { Activity } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class ActivityEntity implements Activity {
    constructor(partial: Partial<ActivityEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

