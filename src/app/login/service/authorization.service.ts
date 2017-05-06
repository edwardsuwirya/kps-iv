import {Injectable, Inject} from "@angular/core";
import {LocalStorageService} from "../../shared/service/local-storage.service";
import {APP_CONFIG} from "../../shared/model/application-properties";
/**
 * Created by edo on 06/05/2017.
 */

@Injectable()
export class AuthorizationService {

    constructor(@Inject(APP_CONFIG) private appConfig, private localStorageService:LocalStorageService) {
    }

    doAuth(un:string, pw:string):boolean {
        this.localStorageService.setItem(this.appConfig.lsAuthKey, '1');
        return true;
    }
}