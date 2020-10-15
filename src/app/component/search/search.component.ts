import { Component, OnInit } from '@angular/core';
import { Enrollee } from "../../model/enrollee";
import { EnrolleeService } from "../../service/enrollee.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  enrollees: Enrollee[];
  searched: Enrollee;
  id: string;

  constructor(private enrolleeService: EnrolleeService) { }

  ngOnInit() {
    this.enrolleeService.getEnrollees().subscribe(enrolleeData => this.enrollees = enrolleeData);
  }

  searchById(id: string) {
    console.log(id);
    
    this.enrolleeService.getSearched(id).subscribe(enrolleeData => this.searched = enrolleeData);
    

  }

}
