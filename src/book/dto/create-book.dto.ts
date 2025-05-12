import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Ufq' })
  name: string;
  @ApiProperty({ example: 1 })
  authorId: number;
}
