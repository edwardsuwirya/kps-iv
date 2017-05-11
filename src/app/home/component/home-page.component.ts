/**
 * Created by edo on 06/05/2017.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../shared/service/local-storage.service";
import {ModalComponent} from "../../shared/component/modal/modal.component";
import {ReportViewerService} from "../../shared/service/report-viewer.service";
import {HttpUtilService} from "../../shared/service/http-util.service";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    @ViewChild('modal1')
    modal1:ModalComponent;

    constructor(private router:Router,
                private localStorageService:LocalStorageService,
                private reportViewerService:ReportViewerService,
                private  httpUtilService:HttpUtilService) {
    }

    ngOnInit():void {
    }

    doTransferInOut() {
        this.router.navigateByUrl('/transferinout');
    }

    doPurchaseRequest() {
        this.modal1.doPopUp();
    }

    doViewPurchaseRequestReport() {
        this.httpUtilService.httpPrint('http://localhost:3000/mock/report').subscribe((res) => {
            this.reportViewerService.createReportForTab(res);
        })

    }

    doConfirmation(event) {
        this.modal1.doClose();
    }

    doLogout() {
        this.localStorageService.clearItem();
        this.router.navigate(['']);
    }
}
