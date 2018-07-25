import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css']
})
export class BasicLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jQuery('body').addClass('body-small');
  }

  ngOnDestroy() {
    jQuery('body').removeClass('body-small');
  }

}
