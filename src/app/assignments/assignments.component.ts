import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.sass']
})
export class AssignmentsComponent implements OnInit {

  title = "My Assignments Component";
  enabled: boolean = true;
  name: string;
  dueDate: Date;
  formVisibile: boolean = false; 

  selectedAssignment: Assignment;

  assignments: Assignment[] = [
    {
      name: "one",
      dueDate: new Date('2018-01-01'),
      submitted: true
    },{
      name: "two",
      dueDate: new Date('2019-01-01'),
      submitted: false
    }
  ];

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.enabled = !this.enabled;
    // }, 2000);
  }

  setSelected(assignment: Assignment){
    this.selectedAssignment = assignment;
  }

  onAddBtnClick(){
    this.formVisibile = true;
  }

}
