import {Injectable} from "@angular/core";
/**
 * Created by 15050978 on 5/10/2017.
 */
@Injectable()
export class ReportViewerService {
    constructor() {
    }

    createReportForDownload(blob: Blob, reportTitle: string) {
        let fileUrl = URL.createObjectURL(blob);
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.href = fileUrl;
        a.download = reportTitle;
        a.click();
        URL.revokeObjectURL(fileUrl);
    }

    createReportForTab(blob: Blob) {
        let fileUrl = URL.createObjectURL(blob);
        window.open(fileUrl, '_blank');
    }
}