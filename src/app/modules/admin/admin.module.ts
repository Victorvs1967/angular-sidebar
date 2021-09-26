import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about/about.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { HomeComponent } from '../../components/home/home.component';
import { AdminRoutinModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AboutComponent,
    ProfileComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutinModule,
  ]
})
export class AdminModule { }
