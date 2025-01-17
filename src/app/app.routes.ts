import { Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listarPensamento', 
        pathMatch: 'full'
    },
    {
        path: 'criarPensamento',
        component: CreateThoughtComponent
    },
    {
        path: 'listarPensamento',
        component: ListThoughtsComponent
    },
    {
        path: 'pensamentos/excluirPensamento/:id',
        component: DeleteThoughtComponent
    },
    {
        path: 'pensamentos/editarPensamento/:id',
        component: EditThoughtComponent
    }
];
