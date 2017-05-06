/**
 * Created by edo on 06/05/2017.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../shared/service/local-storage.service";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    constructor(private router:Router, private localStorageService:LocalStorageService) {
    }

    doLogout() {
        this.localStorageService.clearItem();
        this.router.navigate(['']);
    }
}
