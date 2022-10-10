//import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, PatternValidator, Validators } from '@angular/forms';
import { ValidatorCi } from '../validator-ci';
import { NgxMaskModule } from 'ngx-mask';
@Component({
  selector: 'app-campos',
  templateUrl: './campos.component.html',
  styleUrls: ['./campos.component.css']
})
export class CamposComponent implements OnInit {

  public form: UntypedFormGroup;
  public form2: UntypedFormGroup;
  sol:string = 'hola';
  temaRojo ={
    "border-color": "red",
    "color": "red",
    
  }
  temaNegro ={
    "border-color": "black",
    "color": "black",
    
  }
  ciColor = this.temaNegro;
  novacioColor = this.temaNegro;
  max10Color = this.temaNegro;
  min5Color = this.temaNegro;
  maxvalorColor = this.temaNegro;
  minvalorColor = this.temaNegro;
  emailColor = this.temaNegro;
  passColor = this.temaNegro;
  celColor = this.temaNegro;

  errores:string[]=[];
  constructor(private fb: UntypedFormBuilder) { 
    this.form = fb.group({
      novacio: ['',[Validators.required]],
      max10: ['',[Validators.maxLength(10)]],
      min5: ['',[Validators.minLength(5)]],
      maxvalor:['',[Validators.max(30),Validators.pattern('[0-9]+|(-[0-9]+)')]],
      minvalor: ['',[Validators.min(18),Validators.pattern('[0-9]+'),Validators.required]],
      email: ['',[Validators.email,Validators.required]],
      pass: ['',[Validators.required, Validators.minLength(8), Validators.pattern('[0-9a-z]*[0-9]+[A-Z]+[0-9a-zA-Z]*|[0-9a-z]*[A-Z]+[0-9]+[0-9a-zA-Z]*')]],
     // ci: ['',[Validators.required, Validators.pattern('[0-9]{2}(0[1-9]{1}|1[0-2]{1})(0[1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1])[0-9]{5}')]],
      cel: ['',[Validators.required, Validators.pattern('535[0-9]{7}')]],
      ci: ['',[Validators.required, ValidatorCi.ci]]
      
    });
    this.form2 = fb.group({
      user: ['',[Validators.required]],
      cp: ['',[Validators.required,Validators.pattern('[0-9]+')]],
      cpf:['',[Validators.required,Validators.pattern('[0-9]{11}')]],
      
    })

  }

  ngOnInit(): void {
  }
  funcion()
  {
    this.errores=[];
    
    const controls =  this.form.controls;
    for(const name in controls)
    {
       if(controls[name].invalid)
       {
        this.errores.push(name);
       }
    }
    this.funcionColor();
    console.log(this.errores);
  }
  funcionColor(){

   this.ciColor = this.temaNegro;
   this.novacioColor = this.temaNegro;
   this.max10Color = this.temaNegro;
   this.min5Color = this.temaNegro;
   this.maxvalorColor = this.temaNegro;
   this.minvalorColor = this.temaNegro;
   this.emailColor = this.temaNegro;
   this.passColor = this.temaNegro;
   this.celColor = this.temaNegro;
    
    for(let err in this.errores)
    {
      switch(this.errores[err])
      {
        
        case 'ci': this.ciColor = this.temaRojo; break;
        case 'pass': this.passColor = this.temaRojo;break;
        case 'max10': this.max10Color = this.temaRojo;break
        case 'min5': this.min5Color = this.temaRojo;break
        case 'cel': this.celColor = this.temaRojo; break
        case 'email':this.emailColor = this.temaRojo;break
        case 'minvalor': this.minvalorColor = this.temaRojo;break
        case 'maxvalor': this.maxvalorColor = this.temaRojo;break
        case 'novacio': this.novacioColor = this.temaRojo

      }
   
    }
   
  }
  valcampo(event:KeyboardEvent)
  {
    this.keyPress(event);
    if((this.form2.value.cp.length  + 1)% 4 == 0 && this.form2.value.cp.length > 0)
    {
     let aux =  this.form2.value.cp + ".";
     
     this.form2.controls['cp'].setValue(aux);
    }

    
  }
  
  keyPress(event:KeyboardEvent){
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if(!pattern.test(inputChar)){
      
    event.preventDefault();
    
    }
    
  }
  
}
