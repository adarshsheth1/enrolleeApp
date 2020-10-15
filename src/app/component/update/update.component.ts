import { Component, OnInit } from '@angular/core';
import { Enrollee } from "../../model/enrollee";
import { EnrolleeService } from "../../service/enrollee.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  enrollees: Enrollee[];
  searched: Enrollee;
  id: string;
  name: string;
  active: boolean;
    
  constructor(private enrolleeService: EnrolleeService) { }

  ngOnInit() {
    //this.enrolleeService.getEnrollees().subscribe(enrolleeData => this.enrollees = enrolleeData);
  }

  searchById(id: string) {
    this.enrolleeService.getSearched(id).subscribe(enrolleeData => this.searched = enrolleeData);


  }

  updateEnrollee(id: string, name: string, active: boolean) {
    this.enrolleeService.getSearched(id).subscribe(enrolleeData => this.searched = enrolleeData);

    console.log(active[0]);
    if (active[0] == "t") {
      this.searched.active = true;
      console.log(this.searched.active);
      
    }
    else if (active[0] == "f") {
      this.searched.active = false;
      console.log(this.searched.active);
      
    }
    
    this.searched.name = name;
    console.log(this.searched);
    
    this.enrolleeService.putUpdated(this.searched.id, this.searched).subscribe(enrolleeData => this.searched = enrolleeData);
    
  }


}
