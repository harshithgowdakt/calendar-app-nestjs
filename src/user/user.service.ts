import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  create(data: Partial<User>) {
    return this.userRepository.save(data);
  }

  async update(id: string, data: Partial<User>) {
    await this.userRepository.update(id, data);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
