import { Logger } from '@nestjs/common';
import { Resolver, Args, Int } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { Subscription, Mutation } from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver()
export class FilesSubResolver {
  private log = new Logger(FilesSubResolver.name);

  @Mutation(() => Int, { name: 'getStatus', nullable: true })
  async getStatus(@Args('status', { type: () => String }) status: string) {
    this.log.log(status);
    pubSub.publish('fileStatus', { fileStatus: status });
  }

  @Subscription(() => String)
  fileStatus() {
    return pubSub.asyncIterator('fileStatus');
  }
}
