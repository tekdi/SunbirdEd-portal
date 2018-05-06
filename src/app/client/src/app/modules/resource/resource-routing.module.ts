import { ResourceComponent, CollectionPlayerComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'resources', component: ResourceComponent,
    data: { breadcrumbs: [{ label: 'Home', url: '/home' }, { label: 'Library', url: '' }] }
  }, {
    path: 'resources/play/collection/:id', component: CollectionPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
