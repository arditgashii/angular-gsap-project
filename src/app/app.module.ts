import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ViewsModule  // Ensure ViewsModule is imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
