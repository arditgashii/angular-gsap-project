import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SecondPageComponent } from './second-page/second-page.component';



@NgModule({
  declarations: [
    ViewsComponent,
    SecondPageComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
