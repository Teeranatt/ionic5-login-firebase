import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class crudapi {

    constructor(private fs: AngularFirestore) { }

    //CRUD
    //read
    readData() {
        return this.fs.collection('foood').snapshotChanges();

    }

    delData(docId: any){
      return this.fs.doc('foood/'+ docId).delete();

  }
}
