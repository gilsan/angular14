import { Component } from '@angular/core';
import { NgtCanvas  } from '@angular-three/core';
import {AccordionModule} from 'primeng/accordion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state = true;

  sidebarshow(state: boolean) {
    this.state = state;
  }

  toolBarClass() {
    if (this.state) {
      return { toolbar: true, bartool: false };
    }
    return { toolbar: false, bartool: true };
  }


}
