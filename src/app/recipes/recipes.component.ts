import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() element!: {type:string, name: string, content:string};
  constructor() { }

  ngOnInit(): void {
  }

}
