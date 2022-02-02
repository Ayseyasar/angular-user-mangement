import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { InstrumentPanelComponent } from './components/instrument-panel/instrument-panel.component';
import { MapComponent } from './components/map/map.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeDashboardComponent, children: [
      { path: 'instrument-panel', component: InstrumentPanelComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'map', component: MapComponent },
      { path: '', redirectTo: '/home/instrument-panel', pathMatch: 'full' }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
