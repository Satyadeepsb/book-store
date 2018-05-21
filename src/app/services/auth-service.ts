import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../models/classes/user";
import {ApiService} from "./api-service";


@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  static login(user: User): void {
    localStorage.setItem('user', user.userName);
  }
  static logout(): void {
    localStorage.removeItem('user');
  }
  loadUserDataFromJson(): Observable<User> {
    return this.httpClient.get<User>('user-data.json');
  }
}

