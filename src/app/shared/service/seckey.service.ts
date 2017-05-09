import {Injectable} from "@angular/core";
/**
 * Created by 15050978 on 5/9/2017.
 */
@Injectable()
export class SecKeyService {
    seckey: string = '';

    getSecKey(): string {
        return this.seckey;
    }

    setSeckey(seckey: string) {
        this.seckey = seckey;
    }
}