import {Component} from "@angular/core";
import {Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    loading:boolean = true;

    constructor(private router:Router) {
        router.events.subscribe((event)=> {
            this.navigationInterceptor(event);
        })
    }

    navigationInterceptor(event) {
        if (event instanceof NavigationStart) {
            this.loading = true;
        }

        if (event instanceof NavigationEnd) {
            this.loading = false;
        }

        if (event instanceof NavigationError) {
            this.loading = false;
        }

        if (event instanceof NavigationCancel) {
            this.loading = false;
        }
    }
}
