import { Component } from "@angular/core";
import { AccordionItem } from "./accordion/accordion-item.interface";


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
})
export class ComponentsComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 10',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exampled Content 2',
      isExpanded: false,
    }
  ];

  value = 12;
  max = 100;
  toggleValue = false;

  progressBarUpadate() {
    this.value = 90;
  }

  log() {
    console.log('Debounce Click....');
  }






}
