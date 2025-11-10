import { Component } from '@angular/core';
import { eventRoute, homeRoute, impressumRoute, notFoundRoute, photosRoute, privacyPolicyRoute } from '../../routes.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public Routes = {
    home:homeRoute,
    impressum:impressumRoute,
    privacyPolicy:privacyPolicyRoute,
    notFound:notFoundRoute,
    event:eventRoute,
    photos:photosRoute
  }
}
