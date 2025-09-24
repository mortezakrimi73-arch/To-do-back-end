import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
export declare class TodoService {
    private todoRepo;
    constructor(todoRepo: Repository<Todo>);
    findAll(): Promise<Todo[]>;
    create(title: string): Promise<Todo>;
    remove(id: number): Promise<Todo>;
}
