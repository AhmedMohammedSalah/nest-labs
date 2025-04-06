import { Module ,MiddlewareConsumer,NestModule, Post, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { SchoolsModule } from './schools/schools.module';
import { AuthModule } from './common/middleware/auth/auth.module';
import { CheckEnvModule } from './common/middleware/check_env/check_env.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import{TeacherssModule} from './teachersWithGraphQl/teacherss.module'
import { join } from 'path';
@Module({
  imports: [  TeacherssModule,   TeachersModule, SchoolsModule, AuthModule, ConfigModule.forRoot(),GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule  {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthModule).forRoutes( {path:"teachers" , method: RequestMethod.POST});
    consumer.apply(AuthModule).forRoutes({path:"schools" ,method : RequestMethod.POST});
    consumer.apply(CheckEnvModule).forRoutes({path:"teachers",method: RequestMethod.GET});
  }
}


