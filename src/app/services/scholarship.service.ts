import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, BASE_URL } from '../constants/api-constants'

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {

  constructor(private http: HttpClient) { }

  getScholarships() {
      return this.http.get(`${BASE_URL}${API.GET_SCHOLARSHIPS}`)
  }

  addScholarship(body) {
      return this.http.post(`${BASE_URL}${API.GET_SCHOLARSHIPS}`,body)  
  }

  applyScholarship(body) {
    return this.http.post(`${BASE_URL}${API.APPLY_SCHOLARSHIPS}`,body)  
  }

  getconsent(body) {
    return this.http.post(`${BASE_URL}${API.GET_CONSENT}`,body)
}

}