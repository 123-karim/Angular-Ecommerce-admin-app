import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServcartsService } from '../../service/servcarts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {PserviceService} from '../../../products/pservice.service'
import { __await } from 'tslib';
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit ,OnChanges{
cartsdata:any[]=[];
form!:FormGroup;
cartdetails:any;
product:any;
productsprice:number=0;
constructor(private service:ServcartsService,private bulder:FormBuilder,private ps:PserviceService){}
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    this.form=this.bulder.group({
      start:[""],end:[""]
    });
    this.getallcarts();
    this.filtercarts();

  }
  getallcarts(){
    this.service.getallcarts().subscribe((res:any)=>{this.cartsdata=res;

    })
  }
  filtercarts(){
    this.service.getallcartsbyparam(this.form.value).subscribe((res:any)=>{this.cartsdata=res;

    })
  }
  deletecart(id:any){
    this.service.deletcartbyid(id).subscribe((res)=>{
      this.getallcarts();
        console.log(res)
    });

  }
  viewcartdata(id:number){
    this.cartdetails=[];
    this.product=[];
    this.cartdetails=this.cartsdata[id];
    for(let x in this.cartdetails.products){
      this.ps.getproductbyid(this.cartdetails.products[x].productId).subscribe((res:any)=>{
        this.product.push({item:res,q:this.cartdetails.products[x].quantity})

        })



    }


  }

}
