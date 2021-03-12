import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
              public activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // tslint:disable-next-line: deprecation
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


}
