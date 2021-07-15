import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionRoutes } from './question-routing';
import { QuestionComponent } from './question.component';
import {MessageService} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';


@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(QuestionRoutes),
    DropdownModule,
    RadioButtonModule
  ],
   declarations: [QuestionComponent],
    providers: [MessageService]
})
export class QuestionModule {
  
 } 
