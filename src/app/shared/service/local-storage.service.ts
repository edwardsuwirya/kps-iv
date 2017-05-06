import {Injectable} from "@angular/core";
/**
 * Created by edo on 06/05/2017.
 */

@Injectable()
export class LocalStorageService {

    setItem(key:string, val:string) {
        localStorage.setItem(key, val);
    }

    getItem(key:string):string {
        return localStorage.getItem(key);
    }

    clearItem() {
        localStorage.clear();
    }
}