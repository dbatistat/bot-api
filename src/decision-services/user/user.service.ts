import { Injectable } from '@nestjs/common';
import { UserDatabase } from './user.database';

@Injectable()
export class UserService {
  async getByCode(code: string) {
    const result = UserDatabase.find(user => user.code === code);
    return Promise.resolve(result);
  }
}
