import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { CanGoBackService } from 'src/app/services/can-go-back.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    trigger("trigerNav", [
      state(
        "inactive",
        style({
          transform: "translateX(-100%)"
        })
      ),
      state(
        "active",
        style({
          transform: "translateX(0px)"
        })
      ),
      transition("inactive => active", animate("300ms ease-in")),
      transition("active => inactive", animate("300ms ease-out"))
    ]),
    trigger("trigerShadow", [
      state(
        "inactive",
        style({
          opacity: 0,
          visibility:  'hidden'
        })
      ),
      state(
        "active",
        style({
          opacity: 1,
          visibility:  'visible'
        })
      ),
      transition("inactive => active", animate("300ms ease-in")),
      transition("active => inactive", animate("300ms ease-out"))
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  state:string = 'inactive';
  canGoBack:boolean = false;
  goBackSub:any;
  constructor(private goBack:CanGoBackService) { }

  ngOnInit() {
    this.goBackSub = this.goBack.getGoBack().subscribe(
      res => this.canGoBack = res
    );
  }
  ngOnDestroy(): void {
    this.goBackSub.unsubscribe();
  }
  showNav(){
    this.state = 'active';
  }
  hideNav(){
    this.state = 'inactive';
  }
}
