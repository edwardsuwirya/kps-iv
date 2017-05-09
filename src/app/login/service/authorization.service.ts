import {Injectable, Inject} from "@angular/core";
import {LocalStorageService} from "../../shared/service/local-storage.service";
import {APP_CONFIG} from "../../shared/model/application-properties";
import {SimpleTokenService} from "../../shared/service/simple-token.service";
import {SecKeyService} from "../../shared/service/seckey.service";
/**
 * Created by edo on 06/05/2017.
 */

@Injectable()
export class AuthorizationService {

    constructor(@Inject(APP_CONFIG) private appConfig,
                private localStorageService: LocalStorageService,
                private simpleTokenService: SimpleTokenService,
                private secKeyService: SecKeyService) {
    }

    doAuth(un: string, pw: string): boolean {
        let payload = {'un': un};
        this.secKeyService.setSeckey('kuyak');
        let token = this.simpleTokenService.encodeToken(payload, this.secKeyService.getSecKey());
        this.localStorageService.setItem(this.appConfig.lsAuthKey, token);
        return true;
    }
}