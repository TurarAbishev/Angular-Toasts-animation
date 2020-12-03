import { Injectable } from '@angular/core';
import {Toast} from './toast';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ModelServiceService {

  public items: Toast[] = [];

  addItem(item: Toast): void{
    this.items.push(item);
  }

  getItems(): Toast[]{
    return this.items;
  }

  removeItem(index: number): void{
    this.items = this.items.filter((t, i) => i !== index);
  }
  constructor() { }
}
