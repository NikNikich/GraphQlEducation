import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class MessageType {
  @Field({
    description: 'Сообщение',
    nullable: false
  })
  message: string;
}
