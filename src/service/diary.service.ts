// diary.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { Diary } from '../model/diary.entity';

@Injectable()
export class DiaryService {
  constructor(
    @InjectRepository(Diary)
    private readonly diaryRepository: Repository<Diary>,
    private readonly userSerivce: UserService,
  ) {}

  async getMyDiaries(userId: number): Promise<Diary[]> {
    return await this.diaryRepository.find({ where: { id: userId } });
  }

  async getGroupDiaries(groupId: number): Promise<Diary[]> {
    return await this.diaryRepository.find({ where: { id: groupId } });
  }

  async createDiary(createDiaryDto: any): Promise<Diary[]> {
    const diary = this.diaryRepository.create(createDiaryDto);
    const result = await this.diaryRepository.save(diary);
    return result;
  }
}
