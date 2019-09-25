import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenseManageRoutingModule } from './license-manage-routing.module';
import { LicenseDefaultComponent } from './license-default/license-default.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [LicenseDefaultComponent, LicenseListComponent],
  imports: [
    CommonModule,
    LicenseManageRoutingModule,
    MaterialModule
  ]
})
export class LicenseManageModule { }
