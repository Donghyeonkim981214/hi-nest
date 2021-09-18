import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //await NestFactory.create(AppModule)을 호출한다.
  const app = await NestFactory.create(AppModule);
  //위에서 호출한 어플리케이션을 3000번의 포트로 리스닝한다.
  await app.listen(3000);
}
bootstrap();
//NestJS는 무조건 main.ts 파일을 갖는다. 이름도 변경해서는 안된다.
