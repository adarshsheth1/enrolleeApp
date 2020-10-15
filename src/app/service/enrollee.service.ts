import { Injectable } from '@angular/core';
import { Enrollee } from '../model/enrollee';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  constructor(private serverName: HttpClient) { }

  getEnrollees(): Observable<Enrollee[]> {
    return this.serverName.get<Enrollee[]>("http://localhost:8080/enrollees");
  }

  getSearched(id: string): Observable<Enrollee>{
    console.log("Enrolle ID to search "+ id);
    
    return this.serverName.get<Enrollee>("http://localhost:8080/enrollees/" + id);
  }


  putUpdated(id: string, enrollee: Enrollee): Observable<any>{
    console.log(enrollee);
    if (enrollee.name.length === 0) {
      alert('Name Attribute is empty');
    }
    else {
      return this.serverName.put<any>("http://localhost:8080/enrollees/" + id, enrollee);
    }
  }
}