import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Phone } from '../shared/model/phone';

@Injectable()
export class PhoneService {

    private urlDataPhone = 'assets/list/phone.json';

    constructor(private http: HttpClient) { }

    public getListPhones(): Observable<Phone[]> {
        return this.http.get<Phone[]>(`${environment.url.localUrl}` + '/' + this.urlDataPhone);
    }

}