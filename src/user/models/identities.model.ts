import { Field, Int, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class IdentitiesModel {
  @Field()
  type: string;

  @Field()
  value: string;

  @Field(() => Float)
  timestamp: number;

  @Field((type) => Boolean, { name: 'portalId' })
  'is-primary': boolean;
}
