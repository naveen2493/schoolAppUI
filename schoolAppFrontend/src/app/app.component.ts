import { Component, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages: any[] = [];
  items;
  user = { username: "Sadasivam", student_name: "Naveen", class: "5th", phone: "9952267549", email: "sadasivam@gmail.com" }
  menu_bar;
  menu_item;
  menu_indicator;
  menu_current_item;
  menu_position;
  routerPage;
  showHead: boolean = false;

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

  ngOnInit() {
  }

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
        this.router.navigate(['members', 'home']);
        this.showHead = true;
      } else {
        this.router.navigate(['login']);
        this.showHead = false;
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
