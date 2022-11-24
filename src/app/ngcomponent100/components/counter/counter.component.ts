import { Component, Input } from "@angular/core";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-counter',
  templateUrl: './counter.compoent.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @Input() counter = 0;
  @Input() min = 0;
  @Input() max = Number.MAX_SAFE_INTEGER;
  faMinus = faMinus;
  faPlus = faPlus;

  minusOne() {
    console.log('..... counter.!!!!!!!');
    if (this.min < this.counter) {
      this.counter--;
    }
  }

  addOne() {
    if (this.min > this.counter) {
      this.counter++;
    }
  }


}
