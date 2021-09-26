import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about/about.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { HomeComponent } from '../../components/home/home.component';
import { AdminRoutinModule } from './admin-routing.module';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';

@NgModule({
  declarations: [
    AboutComponent,
    ProfileComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutinModule,
  ]
})
export class AdminModule { }
