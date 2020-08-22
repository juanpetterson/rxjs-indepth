import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public operatorType: string;
  public shortDescription =
    'Perform a side effect for every emission on the source Observable, but return an Observable that is identical to the source.';
  public signature =
    'tap(nextOrObserver: function, error: function, complete: function): Observable';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.operatorType = data.operator;
    });
  }
}
