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
    button1Text:string = 'Cancel';

    @Input()
    button2Text:string = 'OK';

    @Output()
    click1Event:EventEmitter<boolean> = new EventEmitter();

    @Output()
    click2Event:EventEmitter<boolean> = new EventEmitter();

    constructor() {
    }

    ngOnInit():void {
        $('.modal').modal({
            dismissible: false
        });
    }

    doClick1() {
        this.click1Event.emit(true);
    }

    doClick2() {
        this.click2Event.emit(true);
    }

    doPopUp() {
        $('#' + this.modalId).modal('open');
    }

    doClose() {
        $('#' + this.modalId).modal('close');
    }
}
