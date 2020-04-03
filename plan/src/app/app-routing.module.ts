import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocibilancioComponent } from './vocibilancio/vocibilancio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'vocibilancio', component:VocibilancioComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
