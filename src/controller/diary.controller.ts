// diary.controller.ts

import { Controller, Get, Param, Post, Body, Query } from "@nestjs/common";
import { DiaryService } from "./diary.service";
import { UserService } from "../service/user.service";

@Controller("diaries")
export class DiaryController {
  constructor(private readonly diaryService: DiaryService, private readonly userService: UserService) {
  }

  @Get("my")
  getMyDiaries(@Query("userId") userId: number) {
    return this.diaryService.getMyDiaries(userId);
  }

  @Get("group/:groupId")
  getGroupDiaries(@Param("groupId") groupId: number) {
    return this.diaryService.getGroupDiaries(groupId);
  }

  @Post()
  createDiary(@Body() createDiaryDto: any) {
    return this.diaryService.createDiary(createDiaryDto);
  }
}
