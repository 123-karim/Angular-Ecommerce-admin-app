import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PserviceService } from '../pservice.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.scss']
})

export class ProductsdetailsComponent implements OnInit{
  productid:any;
  data:any={};
  bool:boolean=false;
  constructor(private route:ActivatedRoute, private service:PserviceService){
    this.productid=this.route.snapshot.paramMap.get("id");
  }
  ngOnInit(): void {
   this.detailsproduct();
  }
  detailsproduct(){
    this.bool=true;
  this.service.getproductbyid(this.productid).subscribe(res=>
  {this.data=res;
    this.bool=false;
  });

  }

}
