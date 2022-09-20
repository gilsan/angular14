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
        routerLink: '/geometry/cube',
      },
      {
        label: '평면',
        icon: 'pi pi-times',
        routerLink: '/geometry/plane',
      },
      {
        label: 'THREE 기본',
        icon: 'pi pi-external-link',
        routerLink: '/geometry/engine',
      },
      {
        label: 'Orbit Control',
        icon: 'pi pi-upload',
        routerLink: '/geometry/orbit',
      },
      {
        label: 'Materiala',
        icon: 'pi pi-refresh',
        items: [
          { label: 'Normal', icon: 'pi pi-refresh',routerLink: '/geometry/normal'},
          { label: '재질', icon: 'pi pi-refresh',routerLink: '/geometry/map'},
          { label: '조명', icon: 'pi pi-refresh',routerLink: '/geometry/light'},

        ],
        style: {'width' : '200px', 'color': 'blue'}
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
