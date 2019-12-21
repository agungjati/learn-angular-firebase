import { Component, ViewChild } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ReportModel } from 'src/models/report.model';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  description :string;
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  
  constructor(private service :FirebaseService){}

  public onSave(){
    let report = new ReportModel();
    report.description = this.description;
    this.service.AddReport(report);
  }

  

  close(reason: string) {
    this.sidenav.close();
  }
}
