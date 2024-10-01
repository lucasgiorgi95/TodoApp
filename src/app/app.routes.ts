import { Routes } from '@angular/router';
import { TodoComponent } from './componentes/todo/todo.component';

export const routes: Routes = [
    {path:'todo', component:TodoComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'todo'},
];
