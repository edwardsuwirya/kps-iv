/**
 * Created by 15050978 on 5/9/2017.
 */
import {Injectable} from "@angular/core";

declare let jwt: any;
@Injectable()
export class SimpleTokenService {

    constructor() {
    }

    encodeToken(payload: Object, seckey: string): string {
        return jwt.encode(payload, seckey);
    }

    decodeToken(token: string, seckey: string): Object {
        return jwt.decode(token, seckey);
    }
}