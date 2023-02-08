import { Articles } from './articles.model';
import { ArticleResponseDto } from './dto/article.response.dto';

export class ArticlesPresenter {
  public static toResponseDto(data: Articles): ArticleResponseDto {
    return {
      id: data.id,
      title: data.title,
      body: data.body,
      author: data.author,
    };
  }

  public static toResponseManyDto(data: Articles[]): ArticleResponseDto[] {
    return data.map(this.toResponseDto);
  }
}
