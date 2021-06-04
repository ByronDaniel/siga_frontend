import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAdministrationService } from '../../../services/auth/user-administration.service';
import { User } from '../../../models/auth/user';
import { Paginator } from '../../../models/setting/paginator';
import { HttpParams } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { BreadcrumbService } from '../../../shared/services/breadcrumb.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
    paginator: Paginator;
    users: User[];
    formUser: FormGroup;
    user: User;
    userDialog: boolean;
    flagUsers: boolean;

    constructor(
        private spinnerService: NgxSpinnerService,
        private messageService: MessageService,
        private formBuilder: FormBuilder,
        private userAdministrationService: UserAdministrationService,
        private breadcrumbService: BreadcrumbService) {

        this.breadcrumbService.setItems([
            { label: 'Dashboard', routerLink: ['/dashboard'] },
            { label: 'user administration' }
        ]);
        this.paginator = { current_page: 1, per_page: 5 };
        this.users = [];
    }

    ngOnInit(): void {
        this.getUsers(this.paginator);
        this.buildFormUser();
    }

    buildFormUser() {
        this.formUser = this.formBuilder.group({
            id: [null],
            username: [null, [Validators.required, Validators.minLength(7)]],
            identification: [null, [Validators.required]],
            first_name: [null, [Validators.required]],
            second_name: [null, [Validators.required]],
            first_lastname: [null, [Validators.required]],
            second_lastname: [null, [Validators.required]],
            email: [null, [Validators.email, Validators.required]],
            password: [null, [Validators.required]],
            phone: [null, [Validators.required]],
            personal_email: [null, [Validators.email]],
        });
    }

    getUsers(paginator: Paginator) {
        const params = new HttpParams()
            .append('page', paginator.current_page.toString())
            .append('per_page', paginator.per_page.toString());

        this.flagUsers = true;
        this.userAdministrationService.get('user-admins', params).subscribe(
            response => {
                this.flagUsers = false;
                this.users = response['data'];
                this.paginator = response as Paginator;
            }, error => {
                this.flagUsers = false;
                this.messageService.error(error);
            });
    }
}
