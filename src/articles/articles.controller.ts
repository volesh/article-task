import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ArticlesPresenter } from './articles.presenter';
import { ArticlesService } from './articles.service';
import { ArticleResponseDto } from './dto/article.response.dto';
import { CreateArticleDto } from './dto/create.article.dto';
import { UpdateArticleDto } from './dto/update.article.dto';

@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @ApiResponse({ status: 200, type: [ArticleResponseDto] })
  @Get()
  async getAllArticles(): Promise<ArticleResponseDto[]> {
    const articles = await this.articleService.getAll();
    return ArticlesPresenter.toResponseManyDto(articles);
  }

  @ApiResponse({ status: 200, type: ArticleResponseDto })
  @Post()
  async createArticle(
    @Body() createArticle: CreateArticleDto,
  ): Promise<ArticleResponseDto> {
    const article = await this.articleService.createArticle(createArticle);
    return ArticlesPresenter.toResponseDto(article);
  }

  @ApiResponse({ status: 200, type: ArticleResponseDto })
  @ApiQuery({ name: 'id', example: '1' })
  @Put('/:id')
  async updateArticle(
    @Param('id') id: string,
    @Body() createArticle: UpdateArticleDto,
  ): Promise<ArticleResponseDto> {
    const article = await this.articleService.updateArticle(id, createArticle);
    return ArticlesPresenter.toResponseDto(article);
  }

  @ApiQuery({ name: 'id', example: '1' })
  @Delete('/:id')
  async deleteArticle(@Param('id') id: string): Promise<void> {
    await this.articleService.deleteById(id);
  }
}
