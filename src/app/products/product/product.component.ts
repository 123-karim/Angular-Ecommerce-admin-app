import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { PserviceService } from '../pservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()data:any={};
@Output() item = new EventEmitter();
bool:boolean=false;
amount:number=0
products:any
allcategores:any;
base64:any='';
form!:FormGroup;
modal:any;
addingproduct:Boolean=false
upproduct:Boolean=false

constructor(private service:PserviceService ,private bulder:FormBuilder){

}
  ngOnInit(): void {
    this.form=this.bulder.group({
      title:['',[Validators.required]],
      price:['',[Validators.required]],
      description:['',[Validators.required]],
      image: ['',[Validators.required]],
      category:['']
    })
   this.getProducts ()
   this.getcategores()
   this.buttonsappear()


  }
  getitem(){
    this.item.emit({pro:this.data,quantity:this.amount});
    this.bool=false;
  }
  getProducts ():void {

   this.service.getAllProducts().subscribe((res:any)=>{
  this.products=res;

   });
  }
  getcategores(){
    this.service.getAllcategories().subscribe((res:any)=>{
      this.allcategores=res;

    })
  }
  getselectedcategry(event:any){
    this.form.get('category')?.setValue(event.target.value);
    console.log(this.form)
  }

  getimagepath(event:any){
    this.base64="";
    const file=event.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      this.base64=reader.result;
      this.form.get('image')?.setValue(this.base64);
      console.log(this.form)

    };

  }
// adding product not work becauce base64 is to large and value of category not work will with modal(return undefined )
// i will change it late if there is a time after fishing the backend code
  addnewproduct()
  {
this.modal=this.form.value;
this.service.addproduct(this.modal).subscribe((res:any)=>{
  console.log(res);
})

  }
  updateproduct(item:any){
    this.upproduct=true
    this.addingproduct=false;
// this.form.get('title')?.setValue(item.title);
// this.form.get('price')?.setValue(item.price);
// this.form.get('description')?.setValue(item.description);
// this.form.get('image')?.setValue(item.image);
// this.form.get('category')?.setValue(item.category);

// ######################## we can do it by patchValue and two way is run with success ###################

this.form.patchValue({title:item.title,
price:item.price,
description:item.description,
image: item.image,
category:item.category

})
this.base64=item.image;

  }
  buttonsappear(){
    this.upproduct=false
    this.addingproduct=true;

  }
  Updatingproductfunc(){
    this.modal=this.form.value;
    this.service.Updateproduct(this.modal).subscribe((res:any)=>{
      console.log(this.modal)
    });
  }

}
