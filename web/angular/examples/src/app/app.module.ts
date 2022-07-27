import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutBodyComponent } from './layout-body/layout-body.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LogoComponent } from './logo/logo.component';
import { SocialComponent } from './social/social.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardExampleComponent,
    LayoutHeaderComponent,
    LayoutBodyComponent,
    LayoutFooterComponent,
    LogoComponent,
    SocialComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
