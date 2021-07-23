import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCreditComponent } from './edit-credit/edit-credit.component';
import { EditInvestigationComponent } from './edit-investigation/edit-investigation.component';
import { ExtracreditsComponent } from './extracredits/extracredits.component';
import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';
import { InvestigationComponent } from './investigation/investigation.component';
import { SelfEvaluationComponent }  from './self-evaluation/self-evaluation.component'
import { TeacherListComponent } from './teacher-list/teacher-list.component'
import { SelfEvaluationCoordinadorComponent } from './self-evaluation-coordinador/self-evaluation-coordinador.component'

import { ManagementComponent } from './management/management.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HeteroevaluationComponent } from './heteroevaluation/heteroevaluation.component';
import { CoevaluationCoordinatorAreaComponent } from './coevaluation-coordinator-area/coevaluation-coordinator-area.component';
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator/coevaluation-coordinator.component';
import { EvaluationTeacherComponent } from './evaluation-teacher/evaluation-teacher.component';


const routes: Routes = [
  
  /*{
    path: 'matrix',
    component: ManagementComponent
  },
  {
    path: 'generate-pdf',
    component: GeneratePDFComponent
  },
  {
    path: 'extra-credit',
    component: ExtracreditsComponent
  },
  {
    path : 'investigation',
    component: InvestigationComponent
  },
  {
    path : 'edit-credit/:id',
    component: EditCreditComponent
  },
  {
    path : 'edit-investigation/:id',
    component: EditInvestigationComponent
  },*/
  {
    path : 'self-evaluation',
    component: SelfEvaluationComponent
  },
  {
    path : 'self-evaluation-coordinador',
    component: SelfEvaluationCoordinadorComponent
  },
  {
    path : 'teacher-list',
    component: TeacherListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherEvalRoutingModule { }

// hola




