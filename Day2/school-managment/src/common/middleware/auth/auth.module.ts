import { Module } from '@nestjs/common';
import { Injectable,NestMiddleware ,UnauthorizedException} from '@nestjs/common';

@Module({})
export class AuthModule implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
       
        const authHeader = req.headers['token'];
        if (!authHeader) {
        throw new UnauthorizedException('Unauthorized you should be logged in to access this endpoint');
         
        } 

        next();
    }
}
