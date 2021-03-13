import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterAnAccountComponent } from './register-an-account/register-an-account.component';
import { HttpClientModule } from '@angular/common/http'
import { ServerService } from './server.service';
@NgModule({
  declarations: [
    AppComponent,
    RegisterAnAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
