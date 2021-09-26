import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';
import { Todolist } from './todolist/entities/todolist.entitiy';
import { TodolistModule } from './todolist/todolist.module';


//아래의 @는 데코레이터로 클래스에 함수 기능을 추가할 수 있다.
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'doitnow981214@',
      database: 'NestJS',
      entities: [Todolist],
      synchronize: true,
    }),
    MoviesModule,
    TodolistModule,
  ],
  //controller의 역할은 기본적으로 url을 가져오고 함수를 실행하는 것이다.(node.js에서 express의 라우터같은 것)
  controllers: [AppController],
  providers: [],
})
//아래의 AppModule은 비어있는 상태이지만 실제 기능은 위의 데코레이터에 있다.
export class AppModule {}

//app.moudele은 root module과 같은 것이다.
//module이란 에플리케이션의 일부분을 의미한다.(ex: django에서 app)
