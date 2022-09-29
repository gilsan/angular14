import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-progress',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressbarComponent {

  @Input() value = 0;
  @Input() max = 0;

}
