import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    FooterComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule ,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports : [
    HeaderComponent,
    BrowserModule ,
    SpinnerComponent,
    FooterComponent,
    RouterModule,
    FormsModule,
    SelectComponent
  ]
})
export class SharedModule { }
