/**
 * Created by edo on 06/05/2017.
 */
import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthorizationService} from "../service/authorization.service";
import {SecKeyService} from "../../shared/service/seckey.service";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder,
                private authService: AuthorizationService) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            un: ['', Validators.required],
            pw: ['', Validators.required]
        })
    }

    doLogin() {
        let isAuth: boolean = this.authService.doAuth(this.loginForm.get('un').value, this.loginForm.get('pw').value);
        if (isAuth) {
            this.router.navigate(['home']);
        } else {
            this.router.navigate(['']);
        }

    }
}
