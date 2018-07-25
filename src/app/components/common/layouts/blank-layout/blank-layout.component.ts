import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.css']
})
export class BlankLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() {
  }

  ngAfterViewInit() {
    jQuery('body').addClass('body-login');
  }

  ngOnDestroy() {
    jQuery('body').removeClass('body-login');
  }

  ngOnInit() {
  }

}
