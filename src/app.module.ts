import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // نوع دیتابیس
      host: 'localhost', // یا IP سرور
      port: 3306, // پورت پیش‌فرض MySQL
      username: 'Todo-app', // یوزرنیم MySQL
      password: 'F*n/Ta)]UzTa_D5R', // پسورد MySQL
      database: 'todo-app-nestjs', // اسم دیتابیس
      autoLoadEntities: true, // اتوماتیک Entity ها رو بارگذاری می‌کنه
      synchronize: true, // فقط برای توسعه (خودش جدول‌ها رو می‌سازه)
    }),
    TodoModule,
  ],
})
export class AppModule {}
