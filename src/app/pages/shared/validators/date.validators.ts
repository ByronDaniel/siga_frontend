import {FormControl, ValidationErrors} from '@angular/forms';
<<<<<<< HEAD
<<<<<<< HEAD
import * as moment from 'moment';
import {Observable, of} from 'rxjs';
=======
import {isDate, isBefore, isAfter} from 'date-fns';
>>>>>>> mod_6_jobboard
=======
import {isDate, isBefore, isAfter} from 'date-fns';
>>>>>>> u_6_faz-evelyn

export class DateValidators {
    static valid(control: FormControl): ValidationErrors {
        const value = control.value;
        const isValid = value ? isDate(new Date(value)) : true;
        return isValid ? null : {valid: true};
    }

    static max(maxDate: string): (control: FormControl) => ValidationErrors {
        return (control: FormControl): ValidationErrors => {
            const max = new Date(maxDate);
            const value = control.value;
<<<<<<< HEAD
<<<<<<< HEAD
            const isValid = value ? moment(value).isBefore(max) : true;
=======
            const isValid = value ? isBefore(value, max) : true;
>>>>>>> mod_6_jobboard
=======
            const isValid = value ? isBefore(value, max) : true;
>>>>>>> u_6_faz-evelyn
            return isValid ? null : {max: true};
        };
    }

    static min(minDate: string): (control: FormControl) => ValidationErrors {
        return (control: FormControl): ValidationErrors => {
            const min = new Date(minDate);
            const value = control.value;
            const isValid = value ? isAfter(value, min) : true;
            return isValid ? null : {min: true};
        };
    }
}
