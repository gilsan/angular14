import { Component, Input } from "@angular/core";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent {

  @Input() quote = '';
  @Input() author = '';
  @Input() occupation = '';

  faQuoteLeft  = faQuoteLeft;
}
