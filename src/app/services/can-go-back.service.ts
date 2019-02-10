import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CanGoBackService {
  private goBack = new BehaviorSubject<boolean>(false);
  constructor() { }
  canGoBack(){
    this.goBack.next(true);
  }
  cantGoBack(){
    this.goBack.next(false);
  }
  getGoBack(){
    return this.goBack.pipe(map(res=>res))
  }
}
