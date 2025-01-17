import { Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

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
    }
    // {
    //     path: 'pensamentos/excluirPensamento/:id',
    //     component: ExcluirPensamentoComponent
    // },
    // {
    //     path: 'pensamentos/editarPensamento/:id',
    //     component: EditarPensamentoComponent
    // }
];
