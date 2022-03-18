import { Logger } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  private log = new Logger(UserResolver.name);

  constructor(private readonly userService: UserService) {}

  @Query(() => UserModel, { name: 'getContactByEmail', nullable: true })
  getContactByEmail(@Args('email') email: string): Promise<UserModel[]> {
    const user = this.userService.getUser(email);
    this.log.log(user);
    return user;
  }
}
