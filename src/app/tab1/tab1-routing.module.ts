import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'animal-detail/:id',
    loadChildren: () => import('./animal-detail/animal-detail.module').then( m => m.AnimalDetailPageModule)
  },
  {
    path: 'add-animal',
    loadChildren: () => import('./add-animal/add-animal.module').then( m => m.AddAnimalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
