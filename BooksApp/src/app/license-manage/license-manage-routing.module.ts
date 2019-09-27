import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenseDefaultComponent } from './license-default/license-default.component';
import { LicenseListComponent } from './license-list/license-list.component';


const routes: Routes = [
  {
    path: '',
    component: LicenseDefaultComponent,
    children: [
      { path: 'list', component: LicenseListComponent }
    ]
  }
]
@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class LicenseManageRoutingModule { }
