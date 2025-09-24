import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private todoRepo: Repository<Todo>) {}

  findAll() {
    return this.todoRepo.find();
  }

  create(title: string) {
    const todo = this.todoRepo.create({ title });
    return this.todoRepo.save(todo);
  }

  //delet todo
  async remove(id: number) {
    const todo = await this.todoRepo.findOne({
      where: { id },
    });
    if (!todo) {
      throw new Error('Todo not found');
    }
    return this.todoRepo.remove(todo);
  }
}
