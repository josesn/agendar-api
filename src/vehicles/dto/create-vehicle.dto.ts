import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, MinLength, MaxLength, IsUUID } from 'class-validator';

export class CreateVehicleDto {
    @MinLength(1)
    @MaxLength(20)
    @IsString()
    @ApiProperty()
    brand: string

    @MinLength(1)
    @MaxLength(30)
    @IsString()
    @ApiProperty()
    model: string

    @MinLength(1)
    @MaxLength(10)
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    plate: string

    @MinLength(1)
    @MaxLength(15)
    @IsString()
    @ApiProperty()
    color: string

    @MinLength(1)
    @MaxLength(4)
    @IsString()
    @ApiProperty()
    year: string

    @ApiProperty()
    @IsNumber()
    userId: number;
}
