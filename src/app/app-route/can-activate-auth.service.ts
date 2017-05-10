import {Injectable, Inject} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {LocalStorageService} from "../shared/service/local-storage.service";
import {APP_CONFIG} from "../shared/model/application-properties";
import {SimpleTokenService} from "../shared/service/simple-token.service";
import {SecKeyService} from "../shared/service/seckey.service";
/**
 * Created by edo on 06/05/2017.
 */

@Injectable()
export class CanActivateAuth implements CanActivate {
    constructor(@Inject(APP_CONFIG) private appConfig,
                private router: Router,
                private localStorageService: LocalStorageService,
                private simpleTokenService: SimpleTokenService,
                private secKeyService: SecKeyService) {
    }

    canActivate() {
        let token = this.localStorageService.getItem(this.appConfig.lsAuthKey);
        let isAllowed: boolean = false;

        try {
            let payload = this.simpleTokenService.decodeToken(token, this.secKeyService.getSecKey());
            if (payload[this.appConfig.tokUserName]) {
                isAllowed = true;
            } else {
                isAllowed = false
            }
        } catch (err) {
            console.log(err);
            isAllowed = false;
        } finally {
            if (!isAllowed) {
                this.router.navigate(['/login']);
            }
            return isAllowed;
        }
    }

}