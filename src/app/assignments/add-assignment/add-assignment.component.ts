<<<<<<< HEAD
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
=======
import { Component, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { EventEmitter } from 'events';
>>>>>>> 20cf82eee8a683dbdb5f862491ed60e6eb5e34c8

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.sass']
})
export class AddAssignmentComponent implements OnInit {

  name: string;
  dueDate: Date;
<<<<<<< HEAD
  
  @Output() newAssignment = new EventEmitter<Assignment>();
=======
  assignments: Assignment[];

  @Output() newAssignment = new EventEmitter();
>>>>>>> 20cf82eee8a683dbdb5f862491ed60e6eb5e34c8

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
