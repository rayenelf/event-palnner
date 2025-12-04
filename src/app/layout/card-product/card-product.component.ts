import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
@Input() p: Product;

 //1-  preparer la notification à envoyer aux parent
@Output() notificationAcheter = new EventEmitter()


//2- envoyer la notification suite clique
sendDataToParent(p:Product){
  this.notificationAcheter.emit(p)
}
  constructor() { }

  ngOnInit(): void {
  }

}
