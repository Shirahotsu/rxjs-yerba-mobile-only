import { Component, OnInit } from '@angular/core';
import { GetItemsService } from 'src/app/services/get-items.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  yerba$:any = new Observable;
  private sub: any;
  name:string = 'category';
  constructor(
    private items:GetItemsService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      window.scroll(0,0);
    this.sub = this.route.params.subscribe(
      params => {
        const cat:string = params['cat'];
        if(cat !== 'wszystko') this.getItems(cat);
        else this.getAllItems();

      },
      err => console.log(err),
    );

  }

  ngOnInit() {

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  getItems(e){
    this.yerba$ = this.items.getItems(e);
  }
  getAllItems(){
    this.yerba$ = this.items.getAllItems();
  }
  goTo(id:number){
    this.router.navigate([`/yerba/${id}`]);
  }
}
