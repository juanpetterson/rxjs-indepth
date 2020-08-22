import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  operators = ['tap', 'map', 'switchMap', 'concatMap', 'mergeMap'];

  constructor() {}

  ngOnInit(): void {}
}
