import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // tmpobj: any;
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
    {
      name: 'ส้มตำ' ,
      img: 'https://img.kapook.com/u/2016/surauch/cook1/somtam1.jpg',
      recipe: '1.มะละกอ /n 2.ปลาร้า',
      cook : 'me'
    }
  ];

  constructor(public activatedRoute: ActivatedRoute, private router: Router) {}
}
