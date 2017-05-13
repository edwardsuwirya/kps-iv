/**
 * Created by edo on 10/05/2017.
 */
import {Component, OnInit, AfterViewInit} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {TransferDetail} from "../model/transfer-detail";

declare let $:any;

@Component({
    selector: 'app-transferinout-page',
    templateUrl: './transfer-in-out-page.component.html',
    styleUrls: ['./transfer-in-out-page.component.css']
})
export class TransferInOutPageComponent implements OnInit,AfterViewInit {
    detailInfos:TransferDetail[] = [new TransferDetail('', '', 0)];

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
    }

    onAddMoreDetail(idx) {
        this.detailInfos.splice(idx + 1, 0, new TransferDetail('', '', 0, ''));
    }

    onRemoveDetail(idx) {
        if (this.detailInfos.length > 1) {
            this.detailInfos.splice(idx, 1);
        }
    }

    onFocusEditor(editorId:string, labelId:string) {
        Observable.timer(100).do(()=> {
            document.getElementById(editorId).style.display = 'block';
            document.getElementById(labelId).style.display = 'none';
            $('#' + editorId).focus();
        }).subscribe();

    }

    onLostFocusEditor(editorId:string, labelId:string) {
        Observable.timer(100).do(()=> {
            document.getElementById(labelId).style.display = 'block';
            document.getElementById(editorId).style.display = 'none';
        }).subscribe();
    }
}
