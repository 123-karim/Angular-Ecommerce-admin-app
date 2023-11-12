import { Component,OnInit } from '@angular/core';
import { PserviceService } from '../pservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit{
products:any[]=[];
categories:any[]=[];
spin:boolean=false;
cartproduct:any[]=[];
constructor(private service:PserviceService){

}
  ngOnInit(): void {
    this.getProducts();
    this.getcategory();
   }


getProducts ():void {
  this.spin=true;
 this.service.getAllProducts().subscribe((res:any)=>{
this.products=res;
this.spin=false;
 });
}
getcategory():void{
  this.spin=true;
  this.service.getAllcategories().subscribe((cat:any)=>{
    this.categories=cat});
    this.spin=false;
}
filtercat(event:any){

  let cat=event.target.value;
(cat=='all')? this.getProducts() : this.getproductwithcat(cat);

}

getproductwithcat(cat:string):void{
  this.spin=true;
  this.service.getproductbycat(cat).subscribe((res:any)=>{
    this.products=res;
    this.spin=false;
  })
}
Addtocart(event:any){
if("cart"in localStorage){
this.cartproduct=JSON.parse(localStorage.getItem("cart")!);
let exist=this.cartproduct.find(item=>item.pro.id==event.pro.id)
if(exist){
  alert("product is already exist")
}else{
this.cartproduct.push(event);
localStorage.setItem("cart",JSON.stringify(this.cartproduct));
}

}else{
  this.cartproduct.push(event);
localStorage.setItem("cart",JSON.stringify(this.cartproduct));

}
}


}
