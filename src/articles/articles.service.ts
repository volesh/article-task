import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Articles } from './articles.model';
import { CreateArticleDto } from './dto/create.article.dto';
import { UpdateArticleDto } from './dto/update.article.dto';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Articles) private userRepository: typeof Articles) {}

  async getAll(): Promise<Articles[]> {
    return this.userRepository.findAll();
  }

  async createArticle(article: CreateArticleDto): Promise<Articles> {
    return this.userRepository.create(article);
  }

  async deleteById(id: string): Promise<void> {
    const data = await this.userRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Not found', 422);
    }
  }

  async updateArticle(id: string, data: UpdateArticleDto): Promise<Articles> {
    const updatedValue = await this.userRepository.update(data, {
      where: { id },
      returning: true,
    });
    if (!updatedValue[0]) {
      throw new HttpException('Not found', 422);
    }
    return updatedValue[1][0];
  }
}
