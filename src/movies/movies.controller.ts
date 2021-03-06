import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Patch,
    Body,
    Query,
  } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

//http://localhost:3000/movies/
//아래의 'movies' 덕분에 해당 모듈로 접속하기 위한 url은 주소/movies가 된다. 물론 변경가능하며 지울 수도 있다.
@Controller('movies')
export class MoviesController {

  //NestJS가 controller에서 service에 접근하는 방법
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  //url에 있는 id parameter를 사용하기 위해 @param을 사용한다. https://docs.nestjs.com/openapi/types-and-parameters#types-and-parameters
  //그리고 이를 사용하기 위해 @Get('/:id')의 id와 @Param('id')의 id처럼 변수명이 동일해야 한다. 그리고 실제 함수내에서 쓸 변수명 movieId는 변수명이 달라도 괜찮다.
  //원래 id는 string이지만 main.ts 에서 transform을 true로 하여 id를 number형태로 형변환 시켜준다.
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }
  
  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}

/* express.js에서와는 달리 json을 사용하기 위한 추가 설정이 필요 없다. */