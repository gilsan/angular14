import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { Ngcomponent100RoutingModule } from "./ngcomponent100.routing";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { Ngcomponent100Component } from "./ngcomponent100.component";
// import { TopOfPageComponent } from "./components/top-of-page/top-of-page.component";
// import { AccordionComponent } from "./components/accordion/accordion.component";
// import { CardComponent } from "./components/card/card.component";
// import { ComponentsComponent } from "./components/componets.component";
// import { ProgressbarComponent } from "./components/progress-bar/progress-bar.component";
// import { StarRatingsComponent } from "./components/star-ratings/star-ratings.component";


@NgModule({
  declarations: [
   Ngcomponent100Component,
    ToolbarComponent,
    // CardComponent,
    // AccordionComponent,
    // ComponentsComponent,
    // ProgressbarComponent,
    // StarRatingsComponent,
    // TopOfPageComponent,


  ],
  imports: [
    CommonModule,
    Ngcomponent100RoutingModule,
    FontAwesomeModule

  ]
})
export class Ngcomponent100Module {}
