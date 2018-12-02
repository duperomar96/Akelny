import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SearchService } from './search.service';
import { UrlResolver } from '@angular/compiler';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  akla = '';
  aklaGahza = false;
  error: any;
  recipe: any;
  recipeDet = [{
    name: 'Aklny',
    calories: 'Just enough',
    ingredient: [],
    image: '../../assets/hungry.jpg',
    url: ''
  }];
  // recipe: Recipe;
  constructor(private searchService: SearchService) {}

  ngOnInit() {
   }

   expand() {
    $('.search').toggleClass('close');
    $('.input').toggleClass('square');
    if ($('.search').hasClass('close')) {
      $('input').focus();
    } else {
      $('input').blur();
    }
  }

  onSearch() {
    console.log(this.akla);
    this.recipeDet.length = 0;
    this.searchService.getRecipe(this.akla)
      .subscribe(
       (recipe) => this.recipe = recipe.hits , // success path
        (error) => console.log(error), // error path
        // () => this.aklaGahza = true
        () => this.aklaGahza = true
      );
      // this.recipe.forEach(element => {
      //   console.log(element.recipe.label);

      // });
      if (this.aklaGahza ) {
        this.recipe.forEach(element => {
          this.recipeDet.push({
            name: element.recipe.label,
            calories: element.recipe.calories,
            ingredient: element.recipe.ingredientLines,
            image: element.recipe.image,
            url: element.recipe.url
          });
          // this.recipeDet.push(element.recipe.calories);
          // this.recipeDet.push(element.recipe.image);
      console.log(this.recipeDet);
      this.akla = '';
        });
      this.aklaGahza = false;

      }
        // this.recipeDet.forEach(element => {

        // });
  }
  // $('button').on('click', expand);
}
