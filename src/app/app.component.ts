import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstProjetEsprit';
  x=1;
  y = 2;
  z:Number=0;
   constructor() { }

  ngOnInit(): void {
    this.z = this.x+this.y;
  }

}
