import { Component, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import * as $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages: any[] = [];
  items;
  user = { username: "Sadasivam", student_name: "Naveen", class: "5th", phone: "9952267549", email: "sadasivam@gmail.com" }
  routerPage;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
    this.routerPage = router.url;
  }

  ngOnInit() { }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pages = [{
        pagename: "Home",
        icon: "home",
        url: "tabs/home"
      },
      {
        pagename: "Homework",
        icon: "book",
        url: "tabs/homework"
      },
      {
        pagename: "Timetable",
        icon: "calendar",
        url: "tabs/timetable"
      }]
    });

    this.authenticationService.authenticationState.subscribe(state => {

      if (state) {
        $(document).ready(function () {
          if (document.getElementById('menu-bar')) {
            document.getElementById('menu-bar').style.display = 'block';
          }
          let elem = <HTMLElement>document.querySelector("ion-tab-bar");
          if (elem != null) {
            elem.style.display = 'block';
          }
        });

        this.router.navigate(['members', 'home']);

      } else {
        $(document).ready(function () {
          if (document.getElementById('menu-bar')) {
            document.getElementById('menu-bar').style.display = 'none';
          }
          let elem = <HTMLElement>document.querySelector("ion-tab-bar");
          if (elem != null) {
            elem.style.display = 'none';
          }
        });

        this.router.navigate(['login']);

      }
    });
  }

  editProfile() {

    this.items = document.querySelectorAll(".menuItem");

    for (var i = 0, l = 5; i < l; i++) {
      this.items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
      this.items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
    }

    document.querySelector('.center').classList.toggle('small');

    document.querySelector('.circle').classList.toggle('open');

  }

  addClass() {
    document.querySelector('.home-tab').classList.add('tab-selected');
  }

  logout() {
    this.authenticationService.logout();
  }
}
