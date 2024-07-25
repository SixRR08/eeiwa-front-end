import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logedin',
  templateUrl: './logedin.component.html',
  styleUrls: ['./logedin.component.css']
})
export class LogedinComponent implements OnInit {
  opened = false;
  constructor() { }
  ngOnInit(): void {
  }

}
