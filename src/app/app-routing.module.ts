import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule) },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
