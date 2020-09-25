import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class GatesType {
  @Field({
    description: 'ID шлагбаума',
    nullable: true,
  })
  deviceId?: string;

  @Field({
    description: 'Имя шлагбаума на карте',
    nullable: true,
  })
  name?: string;

  @Field({
    description: 'Состояние шлагбаума(открыт или закрыт)',
    nullable: true,
  })
  state?: number;

  @Field({
    description: 'Широта(latitude) координат шлагбаума',
    nullable: true,
  })
  lat?: number;

  @Field({
    description: 'Долгота(Longitude) координат шлагбаума',
    nullable: true,
  })
  lng?: number;
}
