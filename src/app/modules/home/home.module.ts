import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { InstrumentPanelComponent } from './components/instrument-panel/instrument-panel.component';
import { MapComponent } from './components/map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxGeographicMapModule } from "igniteui-angular-maps";



@NgModule({
  declarations: [
    HomeDashboardComponent,
    HeaderComponent,
    UserListComponent,
    InstrumentPanelComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    IgxGeographicMapModule
  ]
})
export class HomeModule { }
