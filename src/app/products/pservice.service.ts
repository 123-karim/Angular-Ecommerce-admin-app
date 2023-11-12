import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PserviceService {

  constructor(private Http:HttpClient) { }
  getAllProducts(){
    return this.Http.get('https://fakestoreapi.com/products');

  }
  getAllcategories(){
    return this.Http.get('https://fakestoreapi.com/products/categories');

  }
  getproductbycat(cat:any){
   return this.Http.get('https://fakestoreapi.com/products/category/'+cat);
  }
  getproductbyid(id:any){
  return this.Http.get('https://fakestoreapi.com/products/'+id);

  }
  addproduct(modal:any)
  {
   return this.Http.post('https://fakestoreapi.com/products',modal)
  }
  Updateproduct(model:any){
   return this.Http.put('https://fakestoreapi.com/products/7',{model})

  }

}
