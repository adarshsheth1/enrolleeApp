import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { Enrollee } from "../../model/enrollee";
import { EnrolleeService } from "../../service/enrollee.service";
import { NgxPaginationModule } from "ngx-pagination";
import { UpdateComponent } from '../update/update.component';
import { Observable } from "rxjs";

@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.css']
})
export class EnrolleesComponent implements OnInit {
  enrollee: Enrollee[];
  searched: Enrollee;
  id: string;
  name: string;
  active: boolean;
  dateOfBirth: Date;
  enrolleeData: Enrollee;

  editField: string;
  

  constructor(private enrolleeService: EnrolleeService) { }
  
  p = 1;
  @Input('sortable-column')
    columnName: string;

    @Input('sort-direction')
    sortDirection: string = '';

    @HostListener('click')
    sort() {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }


  ngOnInit(): void {
    this.enrolleeService.getEnrollees().subscribe(enrolleeData => this.enrollee = enrolleeData);
  }


  //##############################
  //##############################
  //This is the Edit section
  //##############################
  //##############################
  
  updateList(id: string, name: string, active: boolean, dateOfBirth: Date, event: any) {
    this.enrolleeService.getSearched(id).subscribe(enrolleeData => this.searched = enrolleeData);
    console.log(this.searched);
    
    this.searched.id = id;
    this.searched.name = name;
    this.searched.active = active;
    this.searched.dateOfBirth = dateOfBirth;
  }
  changeValue(id: string, name: string, active: boolean, dateOfBirth: Date, event: any) {
    
    console.log(id);
    console.log(name);
    console.log(active);
    console.log(dateOfBirth);
    
    this.searched.id = this.id;
    this.searched.name = this.name;
    this.searched.active = this.active;
    this.searched.dateOfBirth = this.dateOfBirth;
  }



  //##############################
  //##############################
  //End of edit section
  //##############################
  //##############################



  
  searchById(id: string) {
    console.log(id);
    
    this.enrolleeService.getSearched(id).
      subscribe(enrolleeData =>
        this.searched = enrolleeData);
    console.log("This searched", this.searched);
        
  
  }
  updateEnrollee(id: string, name: string, active: boolean){
    this.searched.name = name;
    this.searched.active = active;
    this.enrolleeService.putUpdated(this.searched.id, this.searched).subscribe(enrolleeData => this.searched = enrolleeData);
    
  }


}
