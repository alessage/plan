import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocibilancioComponent } from './vocibilancio/vocibilancio.component';

const routes: Routes = [
{path: 'vocibilancio', component:VocibilancioComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
