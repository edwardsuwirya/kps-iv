/**
 * Created by edo on 11/05/2017.
 */
export class TransferDetail {
    article:string;
    serialNo:string;
    qty:number;

    constructor(article?:string, serialNo?:string, qty?:number) {
        this.article = article;
        this.serialNo = serialNo;
        this.qty = qty;
    }
}
