import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  petitionData: Petition = new Petition();
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  submitData() {
    if (this.petitionData) {
      this._dataService.getFormattedDocument(this.petitionData).subscribe(res => {
        let response = res;
        console.log(response);
        if (response["status"] === "success") {
          let fileToken = response["data"]["fileToken"];
          window.open(environment.apibaseurl + "api/document/download?token=" + fileToken);
        }
      }, err => {
        console.log(err);
      })
    }
  }
}

export class Petition {

  constructor() { };
  Petition_No: String;
  Petition_Year: String;
  Date_Of_Petition: String;
  Petitioner_Name: String;
  Petitioner_Place: String;
  Petitioner_Address: String;
  Petitioner_Nationality: String;
  Petitioner_Caste: String;
  Petitioner_Occupation: String;
  Petitioner_Age: String;
  Petitioner_Relation: String;
  Deceased_Name: String;
  Deceased_Alias: String;
  Deceased_Place: String;
  Deceased_Address: String;
  Deceased_Nationality: String;
  Deceased_Caste: String;
  Deceased_Occupation: String;
  Deceased_Age: String;
  Date_Of_Death: String;
  Property_Location: String;
  Property_Address: String;
  Property_State: String;
}

