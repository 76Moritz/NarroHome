import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PrivacyPolicyComponent } from './pages/privacyPolicy/privacyPolicy.component';
import { homeRoute, impressumRoute, notFoundRoute, privacyPolicyRoute } from './routes.constants';

const routes: Routes = [
  { path: homeRoute, component: HomeComponent },
  { path: impressumRoute, component: ImpressumComponent },
  {path: privacyPolicyRoute, component: PrivacyPolicyComponent },
  { path: notFoundRoute, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
