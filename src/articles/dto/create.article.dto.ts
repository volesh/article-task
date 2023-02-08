import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({ type: String, required: true, example: 'Article name' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  title: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Your description to article',
  })
  @IsString()
  @IsNotEmpty()
  @Length(20, 100)
  body: string;

  @ApiProperty({ type: String, required: true, example: 'Vasyl' })
  @IsString()
  @IsNotEmpty()
  @Length(2)
  author: string;
}
