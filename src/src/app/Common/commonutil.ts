import { FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';

export abstract class CommonUtils {

    public static getValueByKey(strKey: string): string {
        const valueFld = localStorage.getItem(strKey);
        if (valueFld != null) {
            return (valueFld);
        }
        return "";
    }

    public static SetCurrentUserID(UserID: number) {
        localStorage.setItem('UserID', UserID.toString());
    } 
  
    public static async scrollIfFormHasErrors(
        thisel: any,
        form: FormGroup
    ): Promise<any> {
        await form.invalid;
        const firstElementWithError = document.querySelector('.ng-invalid');
        if (firstElementWithError) {
            firstElementWithError.scrollIntoView({ behavior: 'smooth' });
        }
    }

    public static handleError(error: any) {
        const errMsg = error.message ? error.message : error.toString();
        // this.error = errMsg;
        console.log(errMsg);
        return throwError(errMsg);
    }
}
