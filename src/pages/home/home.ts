import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  logs = [{time:new Date(), title:'testing 1'},
  {time:new Date(), title:'testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2'},
  {time:new Date(), title:'testing 3 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2'},
  {time:new Date(), title:'testing 4 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2'},
  {time:new Date(), title:'testing 5 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2'},
  {time:new Date(), title:'testing 6 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2'} ];
  constructor(public navCtrl: NavController) {

  }

}
