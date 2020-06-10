import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() color: string;
  @Input() bgColor: string;
  @Input() borderColor: string;
  @Input() borderWidth: string;
  @Input() height: string;
  @Input() width: string;
  @Input() textAlignment: string;

  constructor() { }

  ngOnInit(): void {
  }

}
