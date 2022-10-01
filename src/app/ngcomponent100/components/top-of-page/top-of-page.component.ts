import { ViewportScroller } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-topofpage',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
})
export class TopOfPageComponent {
  isShown = false;
  faChevronUp = faChevronUp;
  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener(
     'window:scroll'
  ) onWindowScroll() {
     const yCoordinate = this.viewportScroller.getScrollPosition()[1];
     this.isShown = yCoordinate > 400;
  }

  goToTop(): void {
    this.viewportScroller.scrollToPosition([0,0]);
  }


}
