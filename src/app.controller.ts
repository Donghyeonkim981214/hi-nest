import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //express의 get라우터와 같은 역할
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //데코레이터의 경우 함수나 클래스에 붙여있어야 한다.
  @Get('/hello')
  sayHello(): string {
    //NestJS는 controller와 service의 함수명이 같기를 권장하지만 그렇지 않다고 실행안되는 것은 아니다.
    return this.appService.getHi();
  }
}


//NestJS는 controller를 비즈니스 로직이랑 구분짓기를 원함
//그래서 controller의 역할은 url을 가져오고 function을 실행하는 것 까지이다.
//나머지 비즈니스 로직은 service에서 설계한다.