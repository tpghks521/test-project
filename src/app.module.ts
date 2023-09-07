import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user.controller';
import { DiaryController } from './controller/diary.controller';
import { UserService } from './service/user.service';
import { DiaryService } from './service/diary.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { Diary } from './model/diary.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // DB 호스트
      port: 3306, // DB 포트 (MySQL의 기본 포트는 3306입니다)
      username: 'alex', // DB 사용자 이름
      password: '1111', // DB 비밀번호
      database: 'testDB', // 사용할 데이터베이스 이름
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entity 위치
      synchronize: true, // 개발 환경에서만 true로 설정, 프로덕션 환경에서는 마이그레이션 사용을 권장합니다.
      logging: true,
    }),
    TypeOrmModule.forFeature([User, Diary]),
  ],
  controllers: [AppController, UserController, DiaryController],
  providers: [AppService, UserService, DiaryService],
})
export class AppModule {}
