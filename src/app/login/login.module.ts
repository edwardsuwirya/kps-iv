/**
 * Created by edo on 06/05/2017.
 */
import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./component/login-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {AuthorizationService} from "./service/authorization.service";

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [
        LoginPageComponent
    ],
    providers: [
        AuthorizationService
    ]
})
export class LoginModule {
}
