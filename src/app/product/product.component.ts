import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = 'Product List ';
  products: any[] = [
    {id: 1, name: 'Laptop', price: 2500, categoryId: 1, description: 'Monster Abra A5'},
    {id: 2, name: 'Smart Phone', price: 25, categoryId: 2, description: 'Huawei Mate 20 Lite'}

  ];
  ngOnInit() {
  }

}
