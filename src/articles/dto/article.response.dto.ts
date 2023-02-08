import { ApiProperty } from '@nestjs/swagger';

export class ArticleResponseDto {
  @ApiProperty({ type: Number, required: true, example: 1 })
  id: number;

  @ApiProperty({ type: String, required: true, example: 'Article name' })
  title: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Your description to article',
  })
  body: string;

  @ApiProperty({ type: String, required: true, example: 'Vasyl' })
  author: string;
}
