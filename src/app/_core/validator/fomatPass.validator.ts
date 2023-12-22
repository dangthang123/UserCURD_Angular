import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    if (password) {
        const pattern = /^(?=.*[!@#$%^&*])(?=.*[A-Z])[A-Za-z\d!@#$%^&*]{9}$/;
        if (!pattern.test(password)) {
            return { 'invalidPassword': true };
        }
    }
    return null;
}
