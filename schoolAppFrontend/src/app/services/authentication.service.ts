import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(
    // Due to this error node_modules/@ionic/storage/storage.d.ts:113:9 - error TS1086: An accessor cannot be declared in an ambient context.get driver(): string | null;
    // private storage: Storage,
    private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    return this.authenticationState.next(true);
    // this.storage.get(TOKEN_KEY).then(res => {
    //   if (res) {
    //     this.authenticationState.next(true);
    //   }
    // });
  }

  login() {
    return this.authenticationState.next(true);
    // return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
    //   this.authenticationState.next(true);
    // });
  }

  logout() {
    return this.authenticationState.next(false);
    // return this.storage.remove(TOKEN_KEY).then(() => {
    //   this.authenticationState.next(false);
    // });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
