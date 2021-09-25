import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

//dto는 Data Transfer Object의 약자로서, 데이터를 오브젝트로 변환하는 객체입니다 어떠한 값이 어떤 타입을 가지고 이 값이 필수인지 옵션인지 정의하기위한 파일
//DTO를 사용하는 이유:
//1. 프로그래머로서 코드를 간결하게 작성할 수 있음
//2. NestJS가 들어오는 쿼리에 대해 유효성 검사를 할 수 있음