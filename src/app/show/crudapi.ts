import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

// tslint:disable-next-line: class-name
export class crudapi {

    constructor(private fs: AngularFirestore) { }

    // vCRUD
    // read
    readData() {
        return this.fs.collection('foood').snapshotChanges();

    }

}
