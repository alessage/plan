import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocibilancioComponent } from './vocibilancio/vocibilancio.component';
import { VocibilanciomasterComponent } from './vocibilanciomaster/vocibilanciomaster.component';

const routes: Routes = [
{path: 'vocibilancio', component: VocibilancioComponent},
{path: 'vocibilanciomaster', component: VocibilanciomasterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
