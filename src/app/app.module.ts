import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamposComponent } from './campos/campos.component';
import { NgxMaskModule,IConfig} from 'ngx-mask';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    
    CamposComponent,
   // NgxMaskModule.forRoot(maskConfig)
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig)
//    NgxMaskModule.forRoot()
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
