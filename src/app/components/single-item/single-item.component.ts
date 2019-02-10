import { Component, OnInit } from '@angular/core';
import { GetItemsService } from 'src/app/services/get-items.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CanGoBackService } from 'src/app/services/can-go-back.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  yerba$:any = new Observable;
  private sub: any;
  constructor(
    private items:GetItemsService,
    private route: ActivatedRoute,
    private goBack: CanGoBackService
  ) {
    this.sub = this.route.params.subscribe(
      params => {
        const id:number = params['id'];
        if(!isNaN(id)|| id!==null) this.getItem(id)
      },
      err => console.log(err),
    );

  }

  ngOnInit(){
    this.goBack.canGoBack();
  }
  ngOnDestroy(){
    this.goBack.cantGoBack();
    this.sub.unsubscribe();
  }
  getItem(id:number){
    this.yerba$ = this.items.getSingleItem(id);
  }

}
