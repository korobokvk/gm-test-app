import { Field, ObjectType } from '@nestjs/graphql';
import { AdditionalUserDataModel } from './additional-user-data.model';

@ObjectType()
export class PropertiesModel {
  @Field(() => AdditionalUserDataModel)
  hs_latest_source_data_2: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_latest_source_data_1: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_is_unworked: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  firstname: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  associatedcompanyid: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  city: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  num_unique_conversion_events: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_latest_source: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_pipeline: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_analytics_revenue: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_social_num_broadcast_clicks: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  createdate: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_analytics_num_visits: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_sequences_actively_enrolled_count: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_social_linkedin_clicks: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_marketable_until_renewal: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_marketable_status: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_analytics_source: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_email_domain: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_analytics_num_page_views: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_marketable_reason_id: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  company: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  state: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  email: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  website: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_marketable_reason_type: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  jobtitle: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  lastmodifieddate: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_analytics_first_timestamp: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_social_google_plus_clicks: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_lifecyclestage_subscriber_date: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_analytics_average_page_views: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  lastname: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_all_contact_vids: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_social_facebook_clicks: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_is_contact: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  num_conversion_events: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_object_id: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_analytics_num_event_completions: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_social_twitter_clicks: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_analytics_source_data_2: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  hs_analytics_source_data_1: AdditionalUserDataModel;

  @Field(() => AdditionalUserDataModel)
  lifecyclestage: AdditionalUserDataModel;
}
