import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class PropertiesValue {
  @Field()
  value: string;
}

@ObjectType()
export class AssociatedCompanyPropertiesModel {
  @Field(() => PropertiesValue)
  country: PropertiesValue;

  @Field(() => PropertiesValue)
  city: PropertiesValue;

  @Field(() => PropertiesValue)
  num_associated_contacts: PropertiesValue;

  @Field(() => PropertiesValue)
  timezone: PropertiesValue;

  @Field(() => PropertiesValue)
  facebook_company_page: PropertiesValue;

  @Field(() => PropertiesValue)
  createdate: PropertiesValue;

  @Field(() => PropertiesValue)
  description: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_num_blockers: PropertiesValue;

  @Field(() => PropertiesValue)
  industry: PropertiesValue;

  @Field(() => PropertiesValue)
  total_money_raised: PropertiesValue;

  @Field(() => PropertiesValue)
  web_technologies: PropertiesValue;

  @Field(() => PropertiesValue)
  numberofemployees: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_analytics_num_visits: PropertiesValue;

  @Field(() => PropertiesValue)
  linkedin_company_page: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_analytics_source: PropertiesValue;

  @Field(() => PropertiesValue)
  annualrevenue: PropertiesValue;

  @Field(() => PropertiesValue)
  founded_year: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_analytics_num_page_views: PropertiesValue;

  @Field(() => PropertiesValue)
  state: PropertiesValue;

  @Field(() => PropertiesValue)
  linkedinbio: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_num_open_deals: PropertiesValue;

  @Field(() => PropertiesValue)
  zip: PropertiesValue;

  @Field(() => PropertiesValue)
  website: PropertiesValue;

  @Field(() => PropertiesValue)
  address: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_analytics_first_timestamp: PropertiesValue;

  @Field(() => PropertiesValue)
  first_contact_createdate: PropertiesValue;

  @Field(() => PropertiesValue)
  twitterhandle: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_target_account_probability: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_lastmodifieddate: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_num_decision_makers: PropertiesValue;

  @Field(() => PropertiesValue)
  phone: PropertiesValue;

  @Field(() => PropertiesValue)
  num_conversion_events: PropertiesValue;

  @Field(() => PropertiesValue)
  domain: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_num_child_companies: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_num_contacts_with_buying_roles: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_object_id: PropertiesValue;

  @Field(() => PropertiesValue)
  is_public: PropertiesValue;

  @Field(() => PropertiesValue)
  name: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_analytics_source_data_2: PropertiesValue;

  @Field(() => PropertiesValue)
  hs_analytics_source_data_1: PropertiesValue;
}
