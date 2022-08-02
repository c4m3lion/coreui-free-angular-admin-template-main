import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FunksionalGrouplarinTeyiniComponent } from './Funksionalgrouplaradi/funksionalgroiplarinteyini.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Anbar'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'anbar'
      },
      {
        path: 'funksionalgrouplarinteyini',
        component: FunksionalGrouplarinTeyiniComponent,
        data: {
          title: 'Funksional Grouplarin Adinin Təyini'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnbarRoutingModule {
}
