import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IdentitiesModel } from './identities.model';

@ObjectType()
export class IdentityProfileModel {
  @Field((type) => Int)
  vid: number;

  @Field((type) => Int, { name: 'savedAtTimestamp' })
  'saved-at-timestamp': number;

  @Field((type) => Int, { name: 'deletedChangedTimestamp' })
  'deleted-changed-timestamp': number;

  @Field(() => [IdentitiesModel])
  identities: IdentitiesModel[];
}
