import { User } from './../Models/User.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CommonUtils } from '../Common/commonutil';

@Injectable()
export class UserAPI { 

    serviceURL = environment.ApiUrl;
    
    constructor(private http: HttpClient) {
    }

    //#region User
    async AuthenticateUser(Email: string, Password: string): Promise<User> {
        if(this.serviceURL.indexOf('testapi')){
            //we don't have live api so this is testing method.
            return null;
        }
        else{
            return (await this.http.get(this.serviceURL + 'User/GetAuthenticateUser?email=' + Email + '&password=' + Password).toPromise()) as User;
        }
    }

    //This method we can use to check if user is logged in or not
    isLoggednIn():boolean {
        if(CommonUtils.getValueByKey('Email') === 'Test@gmail.com'){
            return true;
        } 
        else{
            return false;
        }
    }
}
