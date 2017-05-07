import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SpinnerComponent} from "./component/spinner/spinner.component";
import {LocalStorageService} from "./service/local-storage.service";
import {ModalComponent} from "./component/modal/modal.component";
/**
 * Created by edo on 06/05/2017.
 */
@NgModule({
    declarations: [
        SpinnerComponent,
        ModalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        SpinnerComponent,
        ModalComponent
    ],
    providers: [
        LocalStorageService
    ]
})
export class SharedModule {
}
