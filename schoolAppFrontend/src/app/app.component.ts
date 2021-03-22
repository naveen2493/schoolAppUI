import { Component, AfterViewInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import * as $ from 'jquery';
import { Location } from '@angular/common';
import { UserProfileService } from './services/user-profile.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages: any[] = [];
  items;
  // user = {};
  // Once we create the user model will remove this Mock
  user = { username: "Sadasivam", student_name: "Naveen", class: "5th", phone: "9952267549", blood: 'O+ve', address: '28/23 Pandarinathan st, Ammapet, salem-636003.', email: "sadasivam@gmail.com", password: "qwerty123", batch: "2020" }
  routerPage;
  editUser = false;
  editUserProfile = "";
  isMenuOpen = false;
  lengthError = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private _location: Location,
    public alertController: AlertController,
    private userProfileService: UserProfileService,
    private router: Router
  ) {
    this.initializeApp();
    this.routerPage = router.url;
  }

  ngOnInit() {
    this.getUser();
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
        $(document).ready(function () {
          if (document.getElementById('menu-bar')) {
            document.getElementById('menu-bar').style.display = 'block';
          }
          let elem = <HTMLElement>document.querySelector("ion-tab-button");
          if (elem != null) {
            elem.style.display = 'none';
          }
        });

        this.router.navigate(['members', 'home']);

      } else {
        $(document).ready(function () {
          if (document.getElementById('menu-bar')) {
            document.getElementById('menu-bar').style.display = 'none';
          }
          let elem = <HTMLElement>document.querySelector("ion-tab-button");
          if (elem != null) {
            elem.style.display = 'none';
          }
        });

        this.router.navigate(['login']);

      }
    });

    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/home')) {
        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        // processNextHandler();
      } else {
        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();
      }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });

  }

  showExitConfirm() {
    this.alertController.create({
      header: 'Exit',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }

  getUser() {
    this.user = { username: "Sadasivam", student_name: "Naveen", class: "5th", phone: "9952267549", blood: 'O+ve', address: '28/23 Pandarinathan st, Ammapet, salem-636003.', email: "sadasivam@gmail.com", password: "qwerty123", batch: "2020" }
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen
    console.log("Working")
    if (this.isMenuOpen) {
      document.getElementById('menu-bar').style.transform = 'translate3d(0,0,0)';
      document.getElementById('menu-bar').style['box-shadow'] = '0 0 0 100em rgba(0,0,0,0.6)';
      // 	box-shadow:0 0 0 100em rgba(0,0,0,0.6);
    }
    else {
      document.getElementById('menu-bar').style.transform = 'translate3d(-300px,0,0)';
      document.getElementById('menu-bar').style['box-shadow'] = '0 0 0 0 rgba(0,0,0,0)';
      // document.getElementById('menu-bar').style.transition = 'all 0.3s ease-in-out';
    }


  }


  changeUserDetail(details) {
    this.editUser = true;
    this.editUserProfile = details;
  }

  closeEdit() {
    console.log("Work")
    this.editUser = false;
    this.editUserProfile = '';
  }

  // changePassword() {
  //   this.editUser = !this.editUser;
  //   this.editPassword = !this.editPassword;

  // }

  // changePhone() {
  //   this.editUser = !this.editUser;
  //   this.editPhone = !this.editPhone;

  // }

  // changeMail() {
  //   this.editUser = !this.editUser;
  //   this.editMail = !this.editMail;

  // }

  submitPhone(phone) {
    //Mock Data
    this.user.phone = phone;
    this.editUser = false;
    // this.editPhone = false;

    /*Service Response
    this.userProfileService.put(this.userProfileService.getParams({ 'phone': phone })).subscribe(
      res => {
        this.getUser();
      },
      err => {
        console.log("userProfileService.put", err);
      }
    );*/
  }

  submitMail(email) {
    //Mock Data
    this.user.email = email;
    this.editUser = false;
    // this.editMail = false

    /*Service Response
    this.userProfileService.put(this.userProfileService.getParams({ 'email': email })).subscribe(
      res => {
        this.getUser();
      },
      err => {
        console.log("userProfileService.put", err);
      }
    );*/
  }

  submitAddress(address) {
    //Mock Data
    this.user.address = address;
    this.editUser = false;
    // this.editAddress = false;

    /*Service Response
    this.userProfileService.put(this.userProfileService.getParams({ 'address': address })).subscribe(
      res => {
        this.getUser();
      },
      err => {
        console.log("userProfileService.put", err);
      }
    );*/

  }

  submitPassword(newPassword, confirmPassword) {
    if (newPassword.length > 5) {
      if (newPassword = confirmPassword) {
        //Mock Data
        this.user.password = newPassword;
        this.editUser = false;
        // this.editPassword = false
      }
    }
    else {
      this.lengthError = true;
    }
    /*Service Response
    this.userProfileService.put(this.userProfileService.getParams({ 'password': newPassword })).subscribe(
      res => {
        this.getUser();
      },
      err => {
        console.log("userProfileService.put", err);
      }
    );*/
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
