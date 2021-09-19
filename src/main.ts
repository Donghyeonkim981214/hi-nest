import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //await NestFactory.create(AppModule)을 호출한다.
  const app = await NestFactory.create(AppModule);
  //유효성 검사를 위한 파이프(파이프는 미들웨어와 비슷하다고 보면)
  app.useGlobalPipes(
    new ValidationPipe({
      // whiteList -> 엔티티 데코레이터에 없는 프로퍼티 값은 무조건 거름
      whitelist: true,
      // forbidNonWhitelisted -> 엔티티 데코레이터에 없는 값 인입시 그 값에 대한 에러메세지 알려줌
      forbidNonWhitelisted: true,
      //원래 param으로 들어오는 값은 무조건 string으로 들어온다. transform은 컨트롤러에서 id로 받는 값에 타입을 지정했다면 nest에서 자체적으로 타입을 변환하게다는 옵션
      transform: true,
    }),
  );

  //위에서 호출한 어플리케이션을 3000번의 포트로 리스닝한다.
  await app.listen(3000);
}
bootstrap();
//NestJS는 무조건 main.ts 파일을 갖는다. 이름도 변경해서는 안된다.
//NestJS 어플리케이션은 main.ts에서 시작한다.
