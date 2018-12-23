import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.css']
})
export class PetitionComponent implements OnInit {

  petitionData: any = {};
  petitionerData: any = {};
  deceasedData: any = {};
  propertyData: any = {};
  private Petition_No: string = "";

  constructor(private _dataService: DataService, private _route: ActivatedRoute,private _router: Router) { }

  ngOnInit() {

    this._route.params.subscribe(params => {
      this.Petition_No = params["Petition_No"];
    });

    this._dataService.fetchPetitionData(this.Petition_No).subscribe(res => {
      let response = res;
      console.log(response);
      if (response["status"] === "success") {
        let savedpetitionData = response["data"];
        this.petitionData = savedpetitionData;
        this.petitionerData= savedpetitionData.Petitioners[0];
        this.deceasedData = savedpetitionData.DeceasedDetails;
        this.propertyData =savedpetitionData.PropertyDetails;

      }
    }, err => {
      console.log(err);
    });

  }

  

  saveData() {
    if (this.petitionData) {
      this.petitionData.Petitioners = [];
      this.petitionData.Petitioners.push(this.petitionerData);
      this.petitionData.DeceasedDetails = this.deceasedData;
      this.petitionData.PropertyDetails = this.propertyData;


      this._dataService.savePetitionData(this.petitionData).subscribe(res => {
        let response = res;
        console.log(response);
        if (response["status"] === "success") {
          alert("Details Saved");

          this._router.navigate(["home"]);
          
          let petition_No = response["data"];
          console.log(petition_No);
        }
        else{
          alert("an error occured");
        }
      }, err => {
        console.log(err);
      })
    }
  }

}
