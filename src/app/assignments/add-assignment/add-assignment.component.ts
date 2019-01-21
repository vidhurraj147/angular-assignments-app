import { Component, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.sass']
})
export class AddAssignmentComponent implements OnInit {

  name: string;
  dueDate: Date;
  assignments: Assignment[];

  @Output() newAssignment = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit() {
    const assignment = new Assignment;
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;

    // this.assignments.push(assignment);
    this.newAssignment.emit(assignment);
  }

}
