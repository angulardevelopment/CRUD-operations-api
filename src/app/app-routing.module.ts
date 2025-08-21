import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsComponent } from './operations/operations.component';
import { TypedComponent } from './typed/typed.component';
import { IndianFlagComponent } from './indian-flag/indian-flag.component';

const routes: Routes = [{
  path: 'operations',
  component: OperationsComponent
},
{
  path: 'typed',
  component: TypedComponent
},
{
  path: 'indian-flag',
  component: IndianFlagComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
