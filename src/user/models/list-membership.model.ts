import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ListMembershipModel {
  @Field((type) => Int, { name: 'staticListId' })
  'static-list-id': number;

  @Field((type) => Int, { name: 'internalListId' })
  'internal-list-id': number;

  @Field((type) => Int)
  timestamp: number;

  @Field((type) => Int)
  vid: number;

  @Field((type) => Boolean, { name: 'isMember' })
  'is-member': boolean;
}
