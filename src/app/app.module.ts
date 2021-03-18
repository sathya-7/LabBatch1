import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterAnAccountComponent } from './register-an-account/register-an-account.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ServerService } from './server.service';
import { LoginAccountComponent } from './login-account/login-account.component';
import { ServerRequestInterceptor } from './server-request.interceptor';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAnAccountComponent,
    LoginAccountComponent,
    UsersListComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ServerService,AuthGuard,
    {provide : HTTP_INTERCEPTORS, useClass:ServerRequestInterceptor, multi:true}
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
