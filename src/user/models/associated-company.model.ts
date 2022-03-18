import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AssociatedCompanyPropertiesModel } from './associated-company-properties.model';

@ObjectType()
export class AssociatedCompanyModel {
  @Field((type) => ID, { name: 'companyId' })
  'company-id': number;

  @Field(() => ID, { name: 'portalId' })
  'portal-id': number;

  @Field((type) => [AssociatedCompanyPropertiesModel])
  properties: AssociatedCompanyPropertiesModel[];
}
