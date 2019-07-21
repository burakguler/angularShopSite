import { Component, OnInit } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = 'Product List ';
  filterText = null;
  products: Product[] = [
    {id: 1, name: 'Laptop', price: 4799, categoryId: 1, description: 'Monster Abra A5', imageUrl: 'https://www.monsternotebook.com.tr/UPLOAD/urun-gorselleri-yeni/ABRA/A5_V16/thumb/01-a5_v14-GTX1050_small.png'},
    {id: 3, name: 'Laptop', price: 5599, categoryId: 1, description: 'Monster Abra A7', imageUrl: 'https://www.monsternotebook.com.tr/UPLOAD/urun-gorselleri-yeni/ABRA/A7_V11/thumb/01-A7_V11_small.png'},
    {id: 5, name: 'Laptop', price: 7999, categoryId: 1, description: 'Monster Tulpar T5', imageUrl: 'https://www.monsternotebook.com.tr/UPLOAD/urun-gorselleri-yeni/TULPAR/T5_V19/thumb/01-T5_V19-1650ti_small.png'},
    {id: 2, name: 'Smart Phone', price: 2333, categoryId: 2, description: 'Huawei Mate 20 Lite', imageUrl: 'https://www.monsternotebook.com.tr/UPLOAD/urun-gorselleri-yeni/TULPAR/T5_V19/thumb/01-T5_V19-1650ti_small.png'},
    {id: 4, name: 'Smart Phone', price: 5199, categoryId: 2, description: 'Huawei Mate 20 Pro', imageUrl: 'https://www.monsternotebook.com.tr/UPLOAD/urun-gorselleri-yeni/ABRA/A7_V11/thumb/01-A7_V11_small.png'}];
  ngOnInit() {
  }

}
