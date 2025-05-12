import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({example:"alisher navoiy"})
  name: string;
}
