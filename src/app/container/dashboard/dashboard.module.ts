import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from 'src/app/shared/common/common.component';
import { HumanReadableRatePipe } from 'src/app/pipes/human-readable-rate.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent, CommonComponent, HumanReadableRatePipe],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class DashboardModule {}
