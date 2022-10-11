import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = '';
  isHidden = true;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {

  }

  close() {
    this.isHidden = true;
  }

  open() {
    this.isHidden = false;
  }

}
