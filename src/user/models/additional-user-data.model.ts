import { Field, ObjectType } from '@nestjs/graphql';
import { VersionsModel } from './versions.model';

@ObjectType()
export class AdditionalUserDataModel {
  @Field()
  value: string;

  @Field(() => [VersionsModel])
  versions: VersionsModel[];
}
