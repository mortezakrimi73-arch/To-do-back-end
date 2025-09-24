import { TodoService } from './todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAll(): Promise<import("./todo.entity").Todo[]>;
    create(title: string): Promise<import("./todo.entity").Todo>;
    remove(id: number): Promise<import("./todo.entity").Todo>;
}
