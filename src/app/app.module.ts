import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';  
  
import {CommonService} from './common.service'; 
import { HttpClientModule  } from '@angular/common/http'; 
  
  
@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule,HttpModule,FormsModule, HttpClientModule  
  ],  
  providers: [CommonService],
  bootstrap: [AppComponent]  
})  
export class AppModule { }  