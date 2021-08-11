import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes/recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeDetails = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeDetails() {
    this.recipeDetails.emit();
  }

}
