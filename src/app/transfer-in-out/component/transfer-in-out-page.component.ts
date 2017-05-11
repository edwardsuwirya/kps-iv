/**
 * Created by edo on 10/05/2017.
 */
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {TransferDetail} from "../model/transfer-detail";

declare let $:any;
declare let _:any;

@Component({
    selector: 'app-transferinout-page',
    templateUrl: './transfer-in-out-page.component.html',
    styleUrls: ['./transfer-in-out-page.component.css']
})
export class TransferInOutPageComponent implements OnInit {
    detailInfos:TransferDetail[] = [new TransferDetail('', '', 0)];

    constructor() {
    }

    ngOnInit():void {
    }

    onAddMoreDetail() {
        this.detailInfos.push(new TransferDetail('', '', 0));
    }

    onRemoveDetail(info:TransferDetail) {
        if (this.detailInfos.length > 1) {
            _.remove(this.detailInfos, {'article': info.article, 'qty': info.qty});
        }
    }

    onFocusEditor(editorId:string, labelId:string) {
        Observable.timer(100).do(()=> {
            document.getElementById(editorId).removeAttribute('hidden');
            document.getElementById(labelId).setAttribute('hidden', 'hidden');
            $('#' + editorId).focus();
        }).subscribe();

    }

    onLostFocusEditor(editorId:string, labelId:string) {
        Observable.timer(100).do(()=> {
            document.getElementById(labelId).removeAttribute('hidden');
            document.getElementById(editorId).setAttribute('hidden', 'hidden');
        }).subscribe();
    }
}
