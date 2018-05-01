import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {AppRoutesModule} from "./app.routes";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from "./services/auth.service";
import {JwtHelper} from "./services/jwtHelper.service";
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DealsComponent } from './deals/deals.component';
import {UploadService} from "./services/upload.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    GalleryComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    AgmCoreModule.forRoot({
      apiKey: `AIzaSyDcaeuvCfvHQEagB2SwtBpKgC86BijisbU`
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,JwtHelper,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
