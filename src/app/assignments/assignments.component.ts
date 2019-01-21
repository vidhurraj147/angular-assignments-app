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
    setTimeout(() => {
      this.enabled = !this.enabled;
    }, 2000);
  }

  onSubmit() {
    const assignment = new Assignment();
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;
    this.assignments.push(assignment);
  }

  setSelected(assignment: Assignment){
    this.selectedAssignment = assignment;
  }
}
