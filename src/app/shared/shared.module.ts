import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SpinnerComponent} from "./component/spinner/spinner.component";
import {LocalStorageService} from "./service/local-storage.service";
/**
 * Created by edo on 06/05/2017.
 */
@NgModule({
    declarations: [
        SpinnerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        SpinnerComponent
    ],
    providers: [
        LocalStorageService
    ]
})
export class SharedModule {
}
