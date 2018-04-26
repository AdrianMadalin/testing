import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ContactComponent} from "./contact/contact.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {DealsComponent} from "./deals/deals.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'logadmin', component: LoginComponent},
  {path: 'regadmin', component: RegisterComponent},
  {path: 'oferte', component: DealsComponent},
  {path: 'galerie', component: GalleryComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutesModule {}


