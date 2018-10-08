import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-india-usa',
  templateUrl: './india-usa.component.html',
  styleUrls: ['./india-usa.component.css']
})
export class IndiaUsaComponent implements OnInit {

  constructor( private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
  }
  AtlanticMenu: object[] = [
    {id:1, item: 'Kosher Meal'},
    {id:2, item: 'Moslem Meal'},
    {id:3, item: 'Vegetarian Meal'},
    {id:4, item: 'Asian Meal'}
  ];
  
    PacificMenu: object[] = [
      {id:1, item: 'SeaFood Meal'},
      {id:2, item: 'Lacto Ovo Veg Meal'},
      {id:3, item: 'Bland Meal'},
      {id:4, item: 'Fruit Meal'}
    ];
  
  // Function to navigate to the atlantic meal according to id
  // The id in a route is provided in an array along with route name like ['atlantic', id]
  
    atlanticMenu(item) {
      this.route.navigate(['atlantic', item], { relativeTo: this.router});
    }
  
    // Function to navigate to the pacific meal according to id
  
    pacificMenu(item){
      this.route.navigate(['pacific', item], { relativeTo: this.router});
    }
  viaAtlantic()
  {
    this.route.navigate(['atlantic'],{relativeTo:this.router});

  }
  viaPacific()
  {
    this.route.navigate(['pacific'],{relativeTo:this.router});
  }
}
