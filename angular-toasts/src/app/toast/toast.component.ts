import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Toast} from '../toast';
import {ModelServiceService} from '../model-service.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input() toast: Toast;
  @Input() i: number;
  @Input() initialVertical: number;
  @Input() initialHorizontal: number;
  @Input() initialDuration: number;
  @Output() remove = new EventEmitter<number>();
  constructor(private modelservice: ModelServiceService) { }

  ngOnInit(): void {


  }
}
