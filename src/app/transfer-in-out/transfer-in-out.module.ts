/**
 * Created by edo on 10/05/2017.
 */
import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {TransferInOutPageComponent} from "./component/transfer-in-out-page.component";

@NgModule({
    declarations: [
        TransferInOutPageComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        TransferInOutPageComponent
    ],
    providers: []
})
export class TransferInOutModule {
}
