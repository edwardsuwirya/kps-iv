/**
 * Created by edo on 06/05/2017.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../shared/service/local-storage.service";
import {ModalComponent} from "../../shared/component/modal/modal.component";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    @ViewChild('modal1')
    modal1:ModalComponent;

    constructor(private router:Router, private localStorageService:LocalStorageService) {
    }

    ngOnInit():void {
    }

    doPurchaseRequest() {
        this.modal1.doPopUp();
    }

    doConfirmation(event) {
        this.modal1.doClose();
    }

    doLogout() {
        this.localStorageService.clearItem();
        this.router.navigate(['']);
    }
}
