import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';


const appRoutes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'sobre-mi', component:AboutComponent},
  {path: 'proyectos', component:ProjectsComponent},
  {path: 'crear-proyecto', component:CreateComponent},
  {path: 'contacto', component:ContactComponent},
  {path: 'proyecto/:id', component:DetailComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);