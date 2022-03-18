import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class VersionsModel {
  @Field()
  value: string;

  @Field({ name: 'sourceType' })
  'source-type': string;

  @Field({ name: 'sourceId' })
  'source-id': string;

  @Field({ nullable: true, name: 'updatedByUserId' })
  'updated-by-user-id'?: string;

  @Field(() => Float)
  timestamp: number;

  @Field()
  selected: boolean;
}
