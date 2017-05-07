/**
 * Created by edo on 07/05/2017.
 */
import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

declare let $:any;

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    @Input()
    modalId:string;

    @Input()
    buttonText:string = 'OK';

    @Output()
    clickEvent:EventEmitter<boolean> = new EventEmitter();

    constructor() {
    }

    ngOnInit():void {
        $('.modal').modal({
            dismissible: false
        });
    }

    doClick() {
        this.clickEvent.emit(true);
    }

    doPopUp() {
        $('#' + this.modalId).modal('open');
    }

    doClose() {
        $('#' + this.modalId).modal('close');
    }
}
