import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ShowPage } from '../show/show.page';
import { crudapi } from './crudapi';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //tmpobj: any;
  categorys: any = [
    {
      name: 'ส้มตำ' ,
      img: 'https://img.kapook.com/u/2016/surauch/cook1/somtam1.jpg',
      recipe: '1.มะละกอ /n 2.ปลาร้า',
      cook : 'me'
    },
    {
      name: 'ต้มยำ' ,
      img: 'https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2019/06/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%97%E0%B8%B3%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A2%E0%B8%B3%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87.jpg',
      recipe: '1.มะละกอ /n 2.ปลาร้า',
      cook : 'me'
    },
    {
      name: 'แกงข่าไก่' ,
      img: 'https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2018/11/HappyFresh-Tom-Kha-Gai-Steps.jpg',
      recipe: '1.มะละกอ /n 2.ปลาร้า',
      cook : 'me'
    },
    {
      name: 'พิซซ่ามาการ์ริต้า' ,
      img: 'http://s3-ap-southeast-1.amazonaws.com/wordpresstueetor/blog/th/wp-content/uploads/2020/06/magarita.jpg',
      recipe: '1.มะละกอ /n 2.ปลาร้า',
      cook : 'me'
    },
  ];
  //alertCtrl: any;
  //getcrud: any;
  tmpobj: any;


  constructor(public activatedRoute: ActivatedRoute, private router: Router , private fs: AngularFirestore,private alertCtrl: AlertController,private getcrud: crudapi,private AecController: ModalController) {}

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


    // === ADD ===========================================

    async presentPromptADD(i:any) {
      let alert = this.alertCtrl.create({
        //title: 'Login',
        inputs: [
          {
            name: 'name',
            placeholder: 'ชื่ออาหาร'

          },
          {
            name: 'img',
            placeholder: 'ลิ้งรูปภาพ'

          },
          {
            name: 'recipe',
            placeholder: 'เครื่ีองปรุง'
          },
          {
            name: 'cook',
            placeholder: 'วิธีทำ'
          }

        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'ADD',
            handler: data => {
              let tmpobj =  //db : inputform
                {name: data.name,
                 img: data.img,
                 recipe: data.recipe,
                 cook: data.cook
                };
                this.getcrud.createData(tmpobj);
            }//handler

          }//update
        ]
      });
      (await alert).present();
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

    async presentModal(i: any) {
      const model = await this.AecController.create({
        component: ShowPage,
        componentProps: {
          name: i.name,
                img: i.img,
                recipe: i.recipe,
                cook: i.cook
        }
      })
      return await model.present();

    }



}
