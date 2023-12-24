import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AuthGuard} from './services/auth/auth-guard.service'
import {WorkUploadComponent} from './work-upload/work-upload.component'
import {RegistrationComponent} from './registration/registration.component'

export const routes: Routes = [
    { path: '', component: HomePageComponent  },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'work-upload', component: WorkUploadComponent, canActivate: [AuthGuard],  },
];
