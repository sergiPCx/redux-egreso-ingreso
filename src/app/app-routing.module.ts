import { NgModule } from "@angular/core";
import { LoginComponent } from './auth/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboarRoutes } from './dashboard/dashboard.routes';

const routes: Routes = [
    { path: 'login', component: LoginComponent} ,
    { path: 'register', component: RegisterComponent },
    { 
        path: '', 
        component: DashboardComponent,
        children: dashboarRoutes
    },
    { path: '**', redirectTo: '' }
]
@NgModule({
    imports: [
        RouterModule.forRoot (routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}