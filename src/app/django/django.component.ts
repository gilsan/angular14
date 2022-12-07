import { Component, OnInit } from "@angular/core";
import { DjangoService } from "./services/django.services";


@Component({
  selector: 'app-geo',
  templateUrl: './django.component.html',
  styleUrls: ['./django.component.scss'],
})
export class DjangoComponent implements OnInit {

  message = '';
  constructor(
    public service: DjangoService
  ) { }

  ngOnInit(): void {
    this.service.challenges('3').subscribe(data => {
      this.message = data.goal;
    })
  }




}
