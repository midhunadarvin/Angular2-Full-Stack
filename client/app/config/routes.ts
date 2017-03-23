import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component'
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

export const routes = [
    { path: '', pathMatch:'full', redirectTo: 'home' },
    { path: 'login', component: LoginComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'about', component: AboutComponent }
];