import { Component, OnInit } from "@angular/core";
import { DjangoService } from "./services/django.services";


@Component({
  selector: 'app-geo',
  templateUrl: './django.component.html',
})
export class DjangoComponent implements OnInit {

  constructor(
    public service: DjangoService
  ) { }

  ngOnInit(): void {

  }

  testing() {
    this.service.challenges().subscribe(data => {
      console.log(data);
    })
  }


}
