/**
 * Created by edo on 06/05/2017.
 */
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./component/home-page.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        HomePageComponent
    ],
    providers: []
})
export class HomeModule {
}
