import {Injectable, Inject} from "@angular/core";
import {Observable} from "rxjs";
import {Response, Http, ResponseContentType, RequestOptions} from "@angular/http";
import {APP_CONFIG} from "../model/application-properties";
/**
 * Created by 15050978 on 5/10/2017.
 */
@Injectable()
export class HttpUtilService {
    constructor(@Inject(APP_CONFIG) private config, private http: Http) {
    }


    replaceParam(serviceUrlFromCode: string, params: any) {
        if (!params) {
            this.handleError({status: 400, message: 'params not valid'});
        } else {
            for (var keyParam in params) {
                serviceUrlFromCode = serviceUrlFromCode.replace('{' + keyParam + '}', params[keyParam]);
            }
            return serviceUrlFromCode;
        }
    }

    httpGet(serviceCode: string, queryParameter?: string, params?: any): Observable<any> {
        let serviceUrlFromCode = serviceCode;
        if (serviceUrlFromCode) {
            if (queryParameter) {
                serviceUrlFromCode = serviceUrlFromCode + queryParameter;
            }
            if (params) serviceUrlFromCode = this.replaceParam(serviceUrlFromCode, params);
            return this.http.get(serviceUrlFromCode)
                .map((resp) => this.extractData(resp))
                .catch((err) => this.handleError(err))
        } else {
            return this.handleError({status: 404});
        }
    }

    httpPost(serviceCode: string, payload: any, params?: any): Observable<any> {
        let serviceUrlFromCode = serviceCode;
        if (serviceUrlFromCode) {
            if (params) serviceUrlFromCode = this.replaceParam(serviceUrlFromCode, params);
            return this.http.post(serviceUrlFromCode, payload)
                .map((resp) => this.extractData(resp))
                .catch((err) => this.handleError(err));
        } else {
            return this.handleError({status: 404});
        }
    }

    httpPrint(serviceCode: string, payload?: any) {
        let options = new RequestOptions({responseType: ResponseContentType.Blob});
        let serviceUrlFromCode = serviceCode;
        if (serviceUrlFromCode) {
            return this.http.post(serviceUrlFromCode, payload, options)
                .map(res => res.blob());
        } else {
            return this.handleError({status: 404});
        }
    }

    extractData(response: Response) {
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Bad response status: ' + response.status);
        }
        // console.log('extractData',response);
        let body = response.json();
        return body || {};
    }

    handleError(error: any) {
        console.log('handleError', error);
        let errMsg: string = '';
        let errCode: number;
        if (error.status === 401) {
            errCode = error.status;
            errMsg = this.config.dictionary.ID.error401;
        } else if (error.status === 403) {
            errCode = error.status;
            errMsg = this.config.dictionary.ID.error403;
        } else if (error.status === 404) {
            errCode = error.status;
            errMsg = this.config.dictionary.ID.error404;
        } else if (error.status === 504) {
            errCode = error.status;
            errMsg = this.config.dictionary.ID.error504;
        } else if (error.status === 500) {
            errCode = error.status;
            errMsg = this.config.dictionary.ID.error500;
        } else if (error) {
            errCode = error.status;
            errMsg = error.message;
        } else {
            errCode = 666;
            errMsg = 'Unknown error';
        }
        return Observable.throw({errorCode: errCode, errorMessage: errMsg});
    }
}