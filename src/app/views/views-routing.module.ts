import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: '', component: ViewsComponent, children: [

    ]
  }
];

export const ViewsRoutingModule = RouterModule.forChild(routes);