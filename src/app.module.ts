import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from "./controller/user.controller";
import { DiaryController } from "./controller/diary.controller";
import { UserService } from "./service/user.service";
import { DiaryService } from "./service/diary.service";

@Module({
  imports: [],
  controllers: [AppController,UserController,DiaryController],
  providers: [AppService,UserService,DiaryService],
})
export class AppModule {}
