import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, IsNumber, MinLength, MaxLength, IsUUID } from 'class-validator';


export class CreateSchedulingDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    vehicleId: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    activityId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    toDate: string;
}
