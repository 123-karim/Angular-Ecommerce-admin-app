import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServcartsService {

  constructor(private http:HttpClient) { }
  getallcarts(){

    return this.http.get('https://fakestoreapi.com/carts') ;

  }
  getallcartsbyparam(param?:any){
    let params=new HttpParams();
    params=params.append("startdate",param?.start).append("enddate",param?.end)
    return this.http.get('https://fakestoreapi.com/carts',{params:params}).pipe(retry(3)) ;

  }
  deletcartbyid(id:number){
    return this.http.delete('https://fakestoreapi.com/carts/')

  }
}
