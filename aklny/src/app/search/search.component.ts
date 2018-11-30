import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SearchService } from './search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  akla = '';
  aklaGahza = false;
  error: any;
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
    this.searchService.getRecipe(this.akla)
      .subscribe(
        (recipe: any[]) => console.log(recipe), // success path
        (error) => console.log(error) // error path
      );
  }
  // $('button').on('click', expand);
}
