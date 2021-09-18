import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//아래의 @는 데코레이터로 클래스에 함수 기능을 추가할 수 있다.
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
//아래의 AppModule은 비어있는 상태이지만 실제 기능은 위의 데코레이터에 있다.
export class AppModule {}
