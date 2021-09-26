import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "src/app/components/about/about.component";
import { ContactComponent } from "src/app/components/contact/contact.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { ProfileComponent } from "src/app/components/profile/profile.component";
import { ProjectsComponent } from "src/app/components/projects/projects.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutinModule {}