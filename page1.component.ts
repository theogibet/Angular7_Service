import { Component, OnInit, ViewChild } from '@angular/core';
import { Page2Component } from '../page2/page2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../request.service';
import { FunFact } from '../request.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  inputData: string = "";
  alertEmpty: string = "Veuillez remplir le champ";
  alertWrongInput: string = "Mauvais format de date, veuillez vous référer à l'exemple";
  dateRegExp : string = "^(1[0-2]|[1-9])[/]([1-9]|[12][0-9]|3[01])$";
  constructor(public requestservice : RequestService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  getfact() {
    if (this.inputData == "") {
      alert(this.alertEmpty);
      return 84;
    }
    var reg = new RegExp(this.dateRegExp,"g");
    if (reg.test(this.inputData) === false) {
      alert(this.alertWrongInput);
      this.inputData = ""
      return 84;
    }

    this.requestservice.getFunFact(this.inputData).subscribe((requestResult) => {
      if (requestResult) {
        this.requestservice.funFacts.push({title: requestResult, date: this.inputData});
      }
      this.inputData = ""
    }, (err) => {
      console.error("ERROR : ", err);
    });
  }

}
