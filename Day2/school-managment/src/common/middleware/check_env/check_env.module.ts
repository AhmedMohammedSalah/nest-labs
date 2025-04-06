import { Module } from '@nestjs/common';
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Module({})
export class CheckEnvModule implements NestMiddleware  {


    constructor(private configService: ConfigService) {}
    use(req: any, res: any, next: () => void ) {

        const token = req.headers['token'];
        const expectedValue = this.configService.get<string>('TOKEN');
        if (token !== expectedValue) {
           
            throw new UnauthorizedException("current token not equal token in env")
            }
              req.user = { id: 1, name: "Ahmed", role: "admin" };   
        
         next(); 
    }
}
