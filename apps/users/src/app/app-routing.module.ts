import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: 'patient',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    {

        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

