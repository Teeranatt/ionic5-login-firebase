import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { crudapi } from './crudapi';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  tmpobj: any;

  constructor(private alertCtrl: AlertController ,
    private getcrud: crudapi,
    public activatedRoute: ActivatedRoute,private router: Router,
    private AceController: ModalController) { }

  ngOnInit() {

    this.getcrud.readData().subscribe(data => {
    this.tmpobj = data.map(e => {
    return {
      id: e.payload.doc.id,
      isEdit: false,
      name: e.payload.doc.data()['name'.toString()],
      img: e.payload.doc.data()['img'.toString()],
      recipe: e.payload.doc.data()['recipe'.toString()],
      cook: e.payload.doc.data()['cook'.toString()],
  };
 });
  console.log(this.tmpobj);

});

}

back(){
  this.router.navigate(['/home']);
}

deleteCountryItem(i: any){
  for (let j=0; j< this.tmpobj.length; j++){
      if (this.tmpobj[j] == i) //found
          this.tmpobj.splice(j,1);
  }//for
}//method

async presentConfirm(i: any) {
  let alert = this.alertCtrl.create({
    //title: 'Confirm purchase',
    message: 'Do you want to delete ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Deleted');

          //this.deleteCountryItem(tmpitem);
          this.getcrud.delData(i.id); //del rowfrom DB
        }
      }
    ]
  });
  (await alert).present();
}

async closeModal(){
  await this.AceController.dismiss();
}


}
