import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

//아래의 'movies' 덕분에 해당 모듈로 접속하기 위한 url은 주소/movies가 된다. 물론 변경가능하며 지울 수도 있다.
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  //url에 있는 id parameter를 사용하기 위해 @param을 사용한다. https://docs.nestjs.com/openapi/types-and-parameters#types-and-parameters
  //그리고 이를 사용하기 위해 @Get('/:id')의 id와 @Param('id')의 id처럼 변수명이 동일해야 한다. 그리고 실제 함수내에서 쓸 변수명 movieId는 변수명이 달라도 괜찮다.
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
