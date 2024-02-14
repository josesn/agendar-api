import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateActivityDto {
    @MaxLength(30)
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string

}
