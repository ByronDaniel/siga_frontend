import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TeacherEvalHttpService {
  /*Hola*/
  private headers: HttpHeaders;
  constructor(

    private httpClient: HttpClient
  ) { }

  getTeacher(url: string) {
    url = environment.API_URL_TEACHEREVAL + url;
    return this.httpClient.get(url, { headers: this.headers });
  }

  getEvaluation(id: string) {
    const url = environment.API_URL_TEACHEREVAL + 'evaluation/gestion';
    return this.httpClient.get(`${url}/${id}`);
  }

  getExtraCredit(url: string) {
    url = environment.API_URL_TEACHEREVAL + url;
    return this.httpClient.get(url, { headers: this.headers });
  }

  getOneCredit(id: string) {
    const url = environment.API_URL_TEACHEREVAL + 'credit/show';
    return this.httpClient.get(`${url}/${id}`, { headers: this.headers })
  }

  getOneResearch(id: string) {
    const url = environment.API_URL_TEACHEREVAL + 'investigacion/show';
    return this.httpClient.get(`${url}/${id}`, { headers: this.headers })
  }


  getResearch(url: string) {
    url = environment.API_URL_TEACHEREVAL + url;
    return this.httpClient.get(url, { headers: this.headers });
  }

  addExtraCredit(id: string, data: any, params = new HttpParams()) {
    const url = environment.API_URL_TEACHEREVAL + 'credit/store';
    return this.httpClient.post(`${url}/${id}`, data, { params })
  }

  addResearch(id: string, data: any, params = new HttpParams()) {
    const url = environment.API_URL_TEACHEREVAL + 'investigacion/store';
    return this.httpClient.post(`${url}/${id}`, data, { params })
  }

  deleteCredit(id: string) {
    const url = environment.API_URL_TEACHEREVAL + 'credit/delete';
    return this.httpClient.delete(`${url}/${id}`, { headers: this.headers })
  }

  deleteResearch(id: string) {
    const url = environment.API_URL_TEACHEREVAL + 'investigacion/delete';
    return this.httpClient.delete(`${url}/${id}`, { headers: this.headers })
  }


  updateCredits(id: string, diploma_yavirac: string, title_fourth_level: string, OCS_member: string, governing_processes: string, process_nouns: string, support_processes, total: string) {
    const url = environment.API_URL_TEACHEREVAL + 'credit/update';
    return this.httpClient.put(`${url}/${id}`,
      {
        diploma_yavirac,
        title_fourth_level,
        OCS_member,
        governing_processes,
        process_nouns,
        support_processes,
        total

      }, { headers: this.headers });
  }

  updateResearch(id: string, inv_auto_eval: string, inv_pares: string, inv_coodinador: string, total: string) {
    const url = environment.API_URL_TEACHEREVAL + 'investigacion/update';
    return this.httpClient.put(`${url}/${id}`,
      {
        inv_auto_eval,
        inv_pares,
        inv_coodinador,
        total

      }, { headers: this.headers });
  }

    post(url: string, data: any, params = new HttpParams()) {
        url = environment.API_URL_AUTHENTICATION + url;
        return this.httpClient.post(url, data, {params});
    }

    update(url: string, data: any, params = new HttpParams()) {
        url = environment.API_URL_AUTHENTICATION + url;
        return this.httpClient.put(url, data, {params});
    }

    delete(url: string, params = new HttpParams()) {
        url = environment.API_URL_AUTHENTICATION + url;
        return this.httpClient.put(url, {params});
    }

    getCatalogues (params = new HttpParams() ){
        const url = environment.API_URL_APP + 'catalogues';
        return this.httpClient.post(url, {params});
    }
    getEvaluationTypes(params = new HttpParams() ){
        const url = environment.API_URL_TEACHEREVAL + 'evaluationType/get';
        return this.httpClient.post(url, {params});
    }

    uploadAvatar(data: FormData, params = new HttpParams()) {
        const url = environment.API_URL_AUTHENTICATION + 'users/avatars';
        return this.httpClient.post(url, data, {params});
    }

    changePassword(data: any, params = new HttpParams()) {
        const url = environment.API_URL_AUTHENTICATION + 'auth/change-password';
        return this.httpClient.put(url, data, {params});
    }
}
