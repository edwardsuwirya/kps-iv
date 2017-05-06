/**
 * Created by edo on 06/05/2017.
 */
import {InjectionToken} from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

let SERVICE_BASE_URL:string = process.env.API_URL;

export const appConfig = {
    'lsAuthKey': 'av',
    'generalErrorMessage': 'Something\'s not good happened, please contact IT',
    'mandatoryErrorMessage': 'Please fill all mandatory fields'
}