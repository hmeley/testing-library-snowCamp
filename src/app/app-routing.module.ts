import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleInputComponent } from "./simple-input/simple-input.component";
import { ComplexFormComponent } from "./complex-form/complex-form.component";

const routes: Routes = [


  {
    path: '',
    component: SimpleInputComponent
  },
  {
    path: 'complex',
    component: ComplexFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
