import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) {
    let elem = <HTMLElement>document.querySelector("ion-tab-button");
    if (elem != null) {
      elem.style.display = 'none';
    }
  }

  ngOnInit() {
  }

  loginForm() {
    this.auth.login();
    this.router.navigate(['members/home']);
  }

}
