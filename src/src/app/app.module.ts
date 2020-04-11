import { AuthGuard } from './Guards/auth.guard';
import { UserAPI } from './Services/UserAPI.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MaterialModule} from './Modules/Material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [UserAPI,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
