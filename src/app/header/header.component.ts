import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

declare const window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public stickyHeader: boolean = false;
  public menus = ['', 'about', 'courses', 'placement/training', 'contact'];
  public showMobMenu: boolean = false;
  // public menus = ['', 'about', 'apply online'];

  constructor(public router: Router, public activatedRoute: ActivatedRoute, public location: Location) { 
    this.router.events.subscribe(
      (val) => {
        this.showMobMenu = false;
      }
    );
  }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 125) {
      this.stickyHeader = true;
    } else if (number < 100) {
      this.stickyHeader = false;
    }

  }

}
