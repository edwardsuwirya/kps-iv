import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRouteModule} from "./app-route/app-route.module";
import {APP_CONFIG, appConfig} from "./shared/model/application-properties";
import {SharedModule} from "./shared/shared.module";
import {LoginModule} from "./login/login.module";
import {HomeModule} from "./home/home.module";
import {TransferInOutModule} from "./transfer-in-out/transfer-in-out.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouteModule,
        SharedModule,
        LoginModule,
        HomeModule,
        TransferInOutModule
    ],
    providers: [
        {provide: APP_CONFIG, useValue: appConfig},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
