// diary.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diary } from './diary.entity';
import { UserService } from "./user.service";

@Injectable()
export class DiaryService {
  constructor(
    @InjectRepository(Diary)
    private readonly diaryRepository: Repository<Diary>,
    private readonly userSerivce: UserService,
  ) {}

  async getMyDiaries(userId: number): Promise<Diary[]> {
    return await this.diaryRepository.find({ where: { user: userId } });
  }

  async getGroupDiaries(groupId: number): Promise<Diary[]> {
    return await this.diaryRepository.find({ where: { group: groupId } });
  }

  async createDiary(createDiaryDto: any): Promise<Diary> {
    const diary = this.diaryRepository.create(createDiaryDto);
    return await this.diaryRepository.save(diary);
  }
}
