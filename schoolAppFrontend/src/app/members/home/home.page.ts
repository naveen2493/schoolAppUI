import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private router: Router) {}

  goToPage(path) {
    this.router.navigate([path]);
  }

  ionViewWillEnter() {
    document.querySelector('.home-tab').classList.add('tab-selected');
  }

  ionViewDidLeave() {
    document.querySelector('.home-tab').classList.remove('tab-selected');
  }
}
