import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { AboutComponentComponent } from './Mycomponents/about-component/about-component.component';

const routes: Routes = [
  {path:'',component:TodosComponent},
  {path:"about",component:AboutComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
