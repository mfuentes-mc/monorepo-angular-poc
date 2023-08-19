import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllergiesComponent } from './allergies/allergies.component';
import { MedicationsComponent } from './medications/medications.component';
import { PatientRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [AllergiesComponent, MedicationsComponent],
  imports: [CommonModule, PatientRoutingModule],
})
export class PagesModule { }
