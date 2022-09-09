import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  display = false;
  items: MenuItem[] = [];
  animationsItems: MenuItem[] = [];
  sampleAngularLists: MenuItem[] = [];

  constructor(private router: Router, ) {}
  @Output() sidebarshow = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.menuList();


  }

  menuList() {
    this.items = [
      {
        label: '큐브',
        icon: 'pi pi-refresh',
        routerLink: '/cube',
      },
      {
        label: '라스팔마호텔',
        icon: 'pi pi-times',
        routerLink: '/learncss/trillo',
      },
      {
        label: '주택안내',
        icon: 'pi pi-external-link',
        routerLink: '/learncss/nexter',
      },
      {
        label: 'Grid',
        icon: 'pi pi-upload',
        routerLink: '/learncss/grid',
      },
    ];
  }



  toggle() {
    this.display = true;
  }

  onShow() {
    this.sidebarshow.emit(false);
  }

  onHide() {
    this.sidebarshow.emit(true);
  }


}
