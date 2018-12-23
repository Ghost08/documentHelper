import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  petitionData: any = [];

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this._dataService.fetchAllPetitionData().subscribe(res => {
      let response = res;
      console.log(response);
      if (response["status"] === "success") {
        this.petitionData = response["data"];

      }
    }, err => {
      console.log(err);
    });
  }

  editPetition(Petition_No: string) {

    this._router.navigate(["petition", Petition_No]);
  }

  downloadFile(Petition_No: string) {
    if (Petition_No) {
      this._dataService.getFormattedDocument(Petition_No).subscribe(res => {
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




