// user.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get(':id')
  // getUserInfo(@Param('id') id: number) {
  //   return this.userService.getUserInfo(id);
  // }
}
