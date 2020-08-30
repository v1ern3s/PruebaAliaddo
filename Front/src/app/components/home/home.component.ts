import { Component, OnInit } from '@angular/core';
import { FatherService } from '../../services/father/father.service';
import { SonService } from '../../services/son/son.service';

import { Father } from '../../models/father';
import { Son } from '../../models/son';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private fatherService: FatherService,
    private sonService: SonService
  ) {}

  fathers: any = [];
  sons: any = [];

  father: Father = {};
  son: Son = {};

  ngOnInit(): void {
    this.getFathers();
  }

  getFathers() {
    this.fatherService.getFathers().subscribe(
      (res) => {
        this.fathers = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addFather() {
    console.log(this.father);
    this.fatherService.saveFather(this.father).subscribe(
      (res) => {
        console.log(res);
        this.father = {};
        this.getFathers();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getSons(id) {
    this.sonService.getSons(id).subscribe(
      (res) => {
        this.sons = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addSon() {
    console.log(this.son);
    this.sonService.saveSon(this.son).subscribe(
      (res) => {
        console.log(res);
        this.son = {};
        this.sons = {};
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getFatherId(id){
    this.son.father_id = id;
    console.log( this.son.father_id);

  }
}
