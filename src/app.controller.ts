import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
}


//NestJS는 controller를 비즈니스 로직이랑 구분짓기를 원함
//그래서 controller의 역할은 url을 가져오고 function을 실행하는 것 까지이다.
//나머지 비즈니스 로직은 service에서 설계한다.