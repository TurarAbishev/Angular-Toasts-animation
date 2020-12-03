import {Component, OnInit} from '@angular/core';
import {Toast} from '../toast';
import {ModelServiceService} from '../model-service.service';

@Component({
  selector: 'app-toasts-creation-form',
  templateUrl: './toasts-creation-form.component.html',
  styleUrls: ['./toasts-creation-form.component.css']
})
export class ToastsCreationFormComponent implements OnInit {
  public title: string;
  public content: string;
  public type: string;
  public duration: number;
  public showDuration: boolean;
  public verticalPosition: string;
  public horizontalPosition: string;
  public submitted = false;
  positionOptions = ['bottom', 'center', 'top'];
  types = ['success', 'error', 'warning'];

  constructor(private modelservice: ModelServiceService) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.modelservice.addItem(new Toast(this.title, this.content, this.type, this.duration, this.duration, this.showDuration, this.verticalPosition, this.horizontalPosition));
  }

}
