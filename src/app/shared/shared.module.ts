import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SpinnerComponent} from "./component/spinner/spinner.component";
import {LocalStorageService} from "./service/local-storage.service";
import {ModalComponent} from "./component/modal/modal.component";
import {SimpleTokenService} from "./service/simple-token.service";
import {SecKeyService} from "./service/seckey.service";
import {ReportViewerService} from "./service/report-viewer.service";
import {HttpModule} from "@angular/http";
import {HttpUtilService} from "./service/http-util.service";
/**
 * Created by edo on 06/05/2017.
 */
@NgModule({
    declarations: [
        SpinnerComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        CommonModule,
        SpinnerComponent,
        ModalComponent
    ],
    providers: [
        LocalStorageService,
        SimpleTokenService,
        SecKeyService,
        ReportViewerService,
        HttpUtilService
    ]
})
export class SharedModule {
}
