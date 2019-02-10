import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { filter, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {

  constructor(private http:HttpClient) { }
  getItems(cat:string): Observable<Item[]>{
    return this.http.get('../../../assets/yerba.json').pipe(
      map((res: Array<any>) => res.filter(res => res.category === cat))
    )
  }
  getAllItems(): Observable<Item[]>{
    return this.http.get('../../../assets/yerba.json').pipe(
      map((res: Array<any>) => res)
    )
  }
  getSingleItem(id:number): Observable<Item[]>{
    return this.http.get('../../../assets/yerba.json').pipe(
      map((res: Array<any>) => res.filter(res => res.id == id))
    )
  }
}
export interface Item {
  id:number,
  category:string,
  image:string,
  name: string,
  description:string,
  rating:any
}
