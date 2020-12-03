import {Component, OnInit} from '@angular/core';
import {ModelServiceService} from './model-service.service';
import {Toast} from './toast';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-toasts';
  initialTop: number;
  initialLeft: number;
  public toasts: Toast[];

  constructor(private modelservice: ModelServiceService) {
  }

  ngOnInit(): void {
    const counter = interval(1000);
    counter.subscribe(n => this.update());
  }

  remove(index: number): void{
    this.modelservice.removeItem(index);
  }

  update(): void{
    for (let _i = 0; _i < this.modelservice.items.length; _i++) {
      this.modelservice.items[_i].duration--;
    }
    this.modelservice.items = this.modelservice.items.filter(toast => toast.duration >= 0);
    if (this.modelservice.items.length > 0){
      this.polozhenie(this.modelservice.items[this.modelservice.items.length - 1].verticalPosition, this.modelservice.items[this.modelservice.items.length - 1].horizontalPosition);
    }
    this.toasts = this.modelservice.items;
  }

  polozhenie(verticalPosition: string, horizontalPosition: string): void {
    let top: number;
    if (verticalPosition === 'top') {
      top = 0;
    } else if (verticalPosition === 'center') {
      top = window.innerHeight / 2 - 100;
    } else {
      top = window.innerHeight - 100;
    }
    this.initialTop = top;
    let left: number;
    if (horizontalPosition === 'top') {
      left = 0;
    } else if (horizontalPosition === 'center') {
      left = window.innerWidth / 2 - 100;
    } else {
      left = window.innerWidth - 300;
    }
    this.initialLeft = left;
  }
}
