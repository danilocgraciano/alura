import { Injectable } from '@angular/core';
import { AbstractControl } from '../../../../node_modules/@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SignupService } from './signup.service';

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signupService: SignupService) { }

    checkUserNameTaken() {
        return (control: AbstractControl) => {

            return control.valueChanges
                .pipe(debounceTime(500))
                .pipe(switchMap(userName => {
                    return this.signupService.checkUserNameTaken(userName);
                }))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                .pipe(first());
        }
    }

}