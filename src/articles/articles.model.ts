import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'articles' })
export class Articles extends Model<Articles> {
  @ApiProperty({ type: String, required: true, example: 'Article name' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Your description to article',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  body: string;

  @ApiProperty({ type: String, required: true, example: 'Vasyl' })
  @Column({ type: DataType.STRING, allowNull: false })
  author: string;
}
