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
  angularItems: MenuItem[]= [];
  animationsItems: MenuItem[] = [];
  sampleAngularLists: MenuItem[] = [];

  gangwonItems: MenuItem[] =[];

  constructor(private router: Router, ) {}
  @Output() sidebarshow = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.menuList();
    this.angularItem();
    this.gangwonItem();
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
        label: '기본',
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

  angularItem() {
    this.angularItems = [
      {
        label: '콤포넌트',
        icon: 'pi pi-refresh',
        routerLink: '/component100',
      },
      {
        label: '디렉티브',
        icon: 'pi pi-times',
        routerLink: '/pipes',
      },
    ]
  }

  gangwonItem() {
    this.gangwonItems = [
      {
        label: 'CSV파일올리기',
        icon: 'pi pi-upload',
        routerLink: '/gangwon/upload',
      },
      {
        label: '음식점',
        icon: 'pi pi-thumbs-up',
        routerLink: '/gangwon/restorant',
      },
      {
        label: '휴계소음식점',
        icon: 'pi pi-thumbs-up',
        routerLink: '/pipes',
      },
      {
        label: '관광식당',
        icon: 'pi pi-thumbs-up',
        routerLink: '/pipes',
      },
      {
        label: '관광유흥음식점',
        icon: 'pi pi-thumbs-up',
        routerLink: '/pipes',
      },
      {
        label: '외국인전용유흥음식점',
        icon: 'pi pi-thumbs-up',
        routerLink: '/pipes',
      },
    ]
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
