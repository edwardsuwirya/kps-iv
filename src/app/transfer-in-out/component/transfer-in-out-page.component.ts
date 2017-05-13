/**
 * Created by edo on 10/05/2017.
 */
import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {TransferDetail} from "../model/transfer-detail";
import {ModalComponent} from "../../shared/component/modal/modal.component";

declare let $:any;
@Component({
    selector: 'app-transferinout-page',
    templateUrl: './transfer-in-out-page.component.html',
    styleUrls: ['./transfer-in-out-page.component.css']
})
export class TransferInOutPageComponent implements OnInit,AfterViewInit {
    @ViewChild('modal1')
    modal1:ModalComponent;
    detailInfo:TransferDetail = new TransferDetail();
    detailInfos:TransferDetail[] = [];
    updateStatus:number = 0;

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
    }

    doCancel(event) {
        this.updateStatus = 0;
        this.detailInfo = new TransferDetail();
        this.modal1.doClose();
    }

    doSave(event) {
        if (this.updateStatus === 0) {
            this.detailInfos.push(this.detailInfo);
        }
        this.detailInfo = new TransferDetail();
        this.modal1.doClose();
    }

    onAddMoreDetail() {
        this.updateStatus = 0;
        this.modal1.doPopUp();
    }

    onUpdateDetail(info:TransferDetail) {
        this.updateStatus = 1;
        this.detailInfo = info;
        this.modal1.doPopUp();
    }

    onRemoveDetail(info:TransferDetail) {
        let index = this.detailInfos.indexOf(info);
        this.detailInfos.splice(index, 1);
    }
}
