import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './modules/material-ui/material-ui.module';
import { SideMainNavComponent } from './components/side-main-nav/side-main-nav.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMainNavComponent,
    MenuListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
