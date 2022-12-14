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
import { TwiterPostComponent } from "./twiter-post/twiter-post.component";
import { ModalComponent } from "./modal/modal.component";
import { CardComponent } from "./card/card.component";
import { QuoteComponent } from "./quote/quote.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { DebounceSearchComponent } from "./debounce-search/debounce-search.component";
import { FormsModule } from "@angular/forms";
import { SearchListComponent } from "./search-list/search-list.component";
import { PipesModule } from "../pipes/pipes.module";
import { CounterComponent } from "./counter/counter.component";



@NgModule({
  declarations: [

    ComponentsComponent,
    AccordionComponent,
    ComponentsComponent,
    ProgressbarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    LoaderComponent,
    TwiterPostComponent,
    ModalComponent,
    QuoteComponent,
    ToggleComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    PipesModule
  ],

})
export class ComponentsModule {}
