import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PublicationFormationComponent } from './publication-formation/publication-formation.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path: '', component : AccueilComponent},
  {path: 'nous-contacter',component: ContactusComponent},
  {path: 'publication-formation', component: PublicationFormationComponent},
  {path: 'services', component:ServiceComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
