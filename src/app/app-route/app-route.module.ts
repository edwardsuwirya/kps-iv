/**
 * Created by edo on 21/04/2017.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginPageComponent} from "../login/component/login-page.component";
import {HomePageComponent} from "../home/component/home-page.component";
import {CanActivateAuth} from "./can-activate-auth.service";
import {SharedModule} from "../shared/shared.module";


export const routes:Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},
    {path: 'home', component: HomePageComponent, canActivate: [CanActivateAuth]},
    {path: '**', component: LoginPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
        SharedModule
    ],
    declarations: [],
    providers: [CanActivateAuth],
    exports: [RouterModule]
})
export class AppRouteModule {
}
