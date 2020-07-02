import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {

  header: any;

  constructor(private readonly el: ElementRef) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.header = this.el.nativeElement.querySelector('nav');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if(this.header && window.pageYOffset > 0) {
      this.header.classList.add("top-nav-collapse");
    }
  }


}
