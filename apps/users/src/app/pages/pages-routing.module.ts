import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AllergiesComponent } from './allergies/allergies.component';
import { MedicationsComponent } from './medications/medications.component';

const routes: Routes = [
    {
        path: 'allergies',
        children: [
            {
                path: '',
                component: AllergiesComponent
            }
        ]
    },
    {
        path: 'medications',
        children: [
            {
                path: '',
                component: MedicationsComponent
            }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PatientRoutingModule { }