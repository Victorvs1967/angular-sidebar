import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "src/app/components/signin/signin.component";

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}