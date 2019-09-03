import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
import { AppRoutingModule } from './app-routing.module';  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';  
  
import {CommonService} from './common.service'; 
import { HttpClientModule  } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 

import { NO_ERRORS_SCHEMA } from '@angular/core';
  
@NgModule({  
  declarations: [  
    AppComponent, LoginComponent, RegisterComponent  
  ],  
  imports: [  
    BrowserModule,HttpModule,FormsModule, HttpClientModule  ,AppRoutingModule
  ],  
  providers: [CommonService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]  
})  
export class AppModule { }  