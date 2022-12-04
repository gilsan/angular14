import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PrimengModule } from './primeng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgtCanvas } from '@angular-three/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EngineComponent } from './components/engine/engine.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EngineComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PrimengModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    // NgtCoreModule,
    // NgtMeshModule,
    // NgtBoxGeometryModule,
    // NgtMeshStandardMaterialModule,
    // NgtAmbientLightModule,
    // NgtSpotLightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
