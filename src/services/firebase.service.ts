import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { ReportModel } from 'src/models/report.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  reportsRef: AngularFireList<any>;
  reportRef: AngularFireObject<any>;

  constructor(private firestore: AngularFirestore) {}

  AddReport(report: ReportModel) {
    this.firestore.collection('reports').add({ 
      description : report.description 
    }).then(() => {
      alert("ok")
    }).catch(error => {
      console.log(error);
    })
  }

}
