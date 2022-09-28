import { Component } from "@angular/core";
import { AccordionItem } from "./accordion/accordion-item.interface";


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
})
export class ComponentsComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exampled Content 2',
      isExpanded: false,
    }
  ];

}
