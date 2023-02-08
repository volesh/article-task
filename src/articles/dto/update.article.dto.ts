import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateArticleDto {
  @ApiProperty({ type: String, required: false, example: 'Article name' })
  @IsString()
  @IsOptional()
  @Length(2, 30)
  title: string;

  @ApiProperty({
    type: String,
    required: false,
    example: 'Your description to article',
  })
  @IsString()
  @IsOptional()
  @Length(20, 100)
  body: string;

  @ApiProperty({ type: String, required: false, example: 'Vasyl' })
  @IsString()
  @IsOptional()
  @Length(2)
  author: string;
}
