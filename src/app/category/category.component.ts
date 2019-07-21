import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = 'Category List'
  categories: category[] = [
    {id: 1, name: 'Smart Phone'},
    {id: 2, name: 'Computer'},
    {id: 3, name: 'Accessories'}
  ]

  ngOnInit() {
  }

}
