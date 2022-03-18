import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AssociatedCompanyModel } from './associated-company.model';
import { IdentityProfileModel } from './identity-profiles.model';
import { ListMembershipModel } from './list-membership.model';
import { PropertiesModel } from './properties.model';

@ObjectType()
export class UserModel {
  @Field(() => Int)
  vid: number;

  @Field({ name: 'canonicalVid' })
  'canonical-vid': string;

  @Field((type) => [String], { name: 'mergedVids', nullable: true })
  'merged-vids'?: string[];

  @Field((type) => Int, { name: 'portalId' })
  'portal-id': number;

  @Field({ name: 'isContract' })
  'is-contact': boolean;

  @Field((type) => PropertiesModel)
  properties: PropertiesModel;

  @Field(() => [String], { name: 'formSubmission' })
  'form-submissions': string[];

  @Field((type) => [ListMembershipModel], { name: 'listMemberships' })
  'list-memberships': ListMembershipModel[];

  @Field(() => [IdentityProfileModel], { name: 'identityProfiles' })
  'identity-profiles': IdentityProfileModel[];

  @Field(() => [String], { name: 'mergeAudits' })
  'merge-audits': string[];

  @Field(() => AssociatedCompanyModel, { name: 'associatedCompany' })
  'associated-company': AssociatedCompanyModel;
}
