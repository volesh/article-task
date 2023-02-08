import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './articles/articles.controller';
import { Articles } from './articles/articles.model';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    ArticlesModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      models: [Articles],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController, ArticlesController],
  providers: [AppService],
})
export class AppModule {}
