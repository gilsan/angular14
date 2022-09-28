import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-progressbar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressbarComponent {

  @Input() title: string = "";
  @Input() subTitle: string = "";
  @Input() iconClass = "";
}
