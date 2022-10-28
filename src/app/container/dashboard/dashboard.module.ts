import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from 'src/app/shared/common/common.component';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent, CommonComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
