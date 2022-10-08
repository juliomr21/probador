import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";
export class ValidatorCi {
static ci(control:AbstractControl): ValidationErrors | null{
let nro = control.value;
let yr:number,mn:number,dy:number;
if(nro.length == 11)
{
    yr = parseInt(nro.slice(0,2));
    mn = parseInt(nro.slice(2,4));
    dy = parseInt(nro.slice(4,6));
    console.log(mn);  
    if((yr >= 0 && yr <= 99) &&  (mn <= 12 && mn > 0) && (dy > 0 && dy <= 31) )
    {
        if( (mn == 2) && dy > 29) return {nro:true};
        if( (mn > 8 && mn % 2 == 1) && dy == 31 ) return {nro:true}
        if( (mn < 8 && mn % 2 == 0) && dy == 31) return {nro:true}
        
    
        return null;
    }
    
    
    
    else
return{nro:true}
}  
   return{nro:true} 
}


}
