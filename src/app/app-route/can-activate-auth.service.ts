import {Injectable, Inject} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {LocalStorageService} from "../shared/service/local-storage.service";
import {APP_CONFIG} from "../shared/model/application-properties";
/**
 * Created by edo on 06/05/2017.
 */

@Injectable()
export class CanActivateAuth implements CanActivate {
    constructor(@Inject(APP_CONFIG) private appConfig, private router:Router,
                private localStorageService:LocalStorageService) {
    }

    canActivate() {
        if (this.localStorageService.getItem(this.appConfig.lsAuthKey) === '1') {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }

    }

}