import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

//CreateMovieDto의 일부만 동일하다.
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}