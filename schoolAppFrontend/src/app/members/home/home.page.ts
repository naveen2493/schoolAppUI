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
    let elem = <HTMLElement>document.querySelector("ion-tab-button");
    if (elem != null) {
      elem.style.display = 'block';
    }
    this.router.navigate([path]);
  }

  ngDoCheck() {
    let elem = <HTMLElement>document.querySelector("ion-tab-button");
    if (elem != null) {
      elem.style.display = 'none';
    }
  }
}
