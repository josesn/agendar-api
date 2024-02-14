import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  id: number;
  @ApiProperty()
  accessToken: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string
  @ApiProperty()
  staff: boolean
}