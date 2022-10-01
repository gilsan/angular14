import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccordionComponent } from "./accordion/accordion.component";
import { ComponentsComponent } from "./componets.component";
import { ProgressbarComponent } from "./progress-bar/progress-bar.component";
import { StarRatingsComponent } from "./star-ratings/star-ratings.component";


import { ComponentsRoutingModule } from "./components.routing";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopOfPageComponent } from "./top-of-page/top-of-page.component";
import { SharedModule } from "../shared/shared.module";
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    AccordionComponent,
    ComponentsComponent,
    ProgressbarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    LoaderComponent,


  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    FontAwesomeModule

  ],

})
export class ComponentsModule {}
