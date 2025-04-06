
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Teacher {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  subject: string;
}