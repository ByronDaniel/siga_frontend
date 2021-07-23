import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { NgxSpinnerService } from 'ngx-spinner';
import {Message,MessageService} from 'primeng/api';
import { TeacherEvalHttpService } from 'src/app/services/teacher-eval/teacher-eval-http.service';
import { HttpParams } from '@angular/common/http';
import { Paginator } from 'src/app/models/setting/paginator';
import { Question } from 'src/app/models/teacher-eval/question';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherEvalService } from 'src/app/services/teacher-eval/teacher-eval.service';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Preguntas } from 'src/app/models/teacher-eval/preguntas';
import { Evaluation } from 'src/app/models/teacher-eval/evaluation';
import { Teacher } from 'src/app/models/app/teacher';
import { EvaluationType } from 'src/app/models/teacher-eval/evaluation-type';
import { SchoolPeriod } from 'src/app/models/app/school-period';
import { Status } from 'src/app/models/app/status';
import { ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-self-evaluation',
  templateUrl: './self-evaluation.component.html',
  styleUrls: ['./self-evaluation.component.css']
})
export class SelfEvaluationComponent implements OnInit {

  formQuestion: FormGroup;
  paginator: Paginator;
  questions: Question[];
  evaluations: Evaluation;
  docente: Teacher;
  evaluationType: EvaluationType;
  schoolPeriod: SchoolPeriod;
  status: Status;
  questions2:FormGroup;
  id: string;
  totalpreguntas: number;

  selectedValue: string = 'val1';

  constructor(public messageService: MessageService,
    private formBuilder: FormBuilder,
    private teacherEvalService: TeacherEvalService,
    private teacherEvalHttpService: TeacherEvalHttpService,
    private confirmationService: ConfirmationService,
    private activeRouter: ActivatedRoute,

  ) {
    this.paginator = { current_page: 1, per_page: 2 };
    this.questions = [];

  }
  city: string;

  selectedCategory: any = null;

  evaluacion: any[] = [{ name: '1', key: this.getRandom(), checked: true }, 
  { name: '2', key: this.getRandom(), checked: false }, 
  { name: '3', key: this.getRandom(), checked: false }, 
  { name: '4', key: this.getRandom(), checked: false }];
  pregunta: any[];
    modelo: Preguntas[] = [];



  get typeField() {
    return this.formQuestion.get('type');
  }
  get statusField() {
    return this.formQuestion.get('type');
  }
  get cpdeField() {
    return this.formQuestion.get('type');
  }
  get orderField() {
    return this.formQuestion.get('type');
  }
  get nameField() {
    return this.formQuestion.get('type');
  }
  get descriptionField() {
    return this.formQuestion.get('type');
  }

  getQuestions(paginator: Paginator) {
    const params = new HttpParams()
      .append('page', paginator.current_page.toString())
      .append('per_page', paginator.per_page.toString());

    this.teacherEvalHttpService.getTeacher('questions').subscribe(
      response => {
        this.questions = response['data'];
        this.paginator = response as Paginator;
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }


  ngOnInit() {
    console.log("initttttttttttttt");

    this.onTestWebService();


    this.selectedCategory = this.evaluacion[1];
    this.activeRouter.params.subscribe(
      params => {
        this.id = params['id'];
        console.log(this.id);
      });
  }
    

  //para traer las preguntas
  onTestWebService() {

    this.teacherEvalService.getEvaluation(1).subscribe(result => {
      this.pregunta = result.data;
      this.getInicializarModelo();

    });
  }

  getRandom() {
    return Math.random();
  }


  getInicializarModelo() {
    let i: number = 0;
    while (this.pregunta.length > i) {
      let inicializador: Preguntas = new Preguntas();
      // inicializador.valor=1;
      this.modelo.push(inicializador);
      i++;
    }
  }

  getCheckSelect() {
    let puntajeMaximo: number = 48;
    let porcentajeEvaluacion: number = 0;
    let isValidateRadio = true;
    console.log(this.pregunta.length);

    for (const iterator of this.modelo) {
      if (iterator.valor) {
        porcentajeEvaluacion += +iterator.valor * 100 / puntajeMaximo;
        iterator.isValidate = true;

      } else {
        iterator.isValidate = false;
        isValidateRadio = false;
      }
    }

    console.log("resultado de la regla de 3 =", porcentajeEvaluacion);

    this.evaluationType = {
      id: 6
    }

    this.schoolPeriod = {
      id: 1
    }

    this.status = {
      id: 1
    }

    this.evaluations = {
      id: 1,
      result: porcentajeEvaluacion,
      percentage: 0.35,
    }
    let data = {
      evaluation_type: this.evaluationType,
      shoolPeriod: this.schoolPeriod,
      status: this.status,
      evaluation: this.evaluations
    }
    console.log(data);
    if (isValidateRadio) {
      this.teacherEvalService.postSelfEvaluations(this.id, data ).subscribe(result => {
        this.showSuccess();
      }, error => {
      });
    } else{
      this.showError();
    }
  }

  confirm() {
    this.confirmationService.confirm({
        message: '¿Estas seguro de guardar la evaluación?',
        accept: () => {
          
        }
    });
   
}
validateModal(value) {
  for (let i = 0; i < this.modelo.length; i++) {
    if (value == i) {

      return this.modelo[i].isValidate;
    }
  }
}
showSuccess() {
  this.messageService.add({ severity: 'success', summary: 'Datos Guardados ', detail: 'La Evaluación ha sido registrada correctamente' });
}

showError() {
  this.messageService.add({ severity: 'error', summary: 'Error ', detail: 'Todos los datos son obligatorios' });
}




}




