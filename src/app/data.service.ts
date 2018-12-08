import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http : HttpClient) { }

  getFormattedDocument(templateMappingData){

    return this._http.post(environment.apibaseurl + 'api/docx/formatData',templateMappingData);
  }
}
