import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UserModel } from './models/user.model';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class UserService {
  private log = new Logger(UserService.name);

  constructor(private httpService: HttpService) {}

  private fetchUserByEmail(email: string): Promise<AxiosResponse<UserModel[]>> {
    return firstValueFrom(
      this.httpService.get(
        `https://api.hubapi.com/contacts/v1/contact/email/${email}/profile?hapikey=eu1-d701-a1eb-4e38-a872-7e0c366178e1`,
      ),
    );
  }

  public async getUser(email: string): Promise<UserModel[]> {
    const userData = await this.fetchUserByEmail(email);
    this.log.log(userData.data);
    return userData.data;
  }
}
