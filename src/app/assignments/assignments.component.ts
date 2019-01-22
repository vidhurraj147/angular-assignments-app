import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';


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

  assignments: Assignment[];

  constructor(private assignmentsService : AssignmentsService) {

   }

  ngOnInit() {
<<<<<<< HEAD
    // this.assignments = this.assignmentsService.getAssignments();
    // setTimeout(() => {
    //   this.enabled = !this.enabled;
    // }, 2000);
    this.getAssignments();
  }

  getAssignments(){
    this.assignmentsService
        .getAssignments()
        .subscribe( assignments => this.assignments = assignments );

=======
    // setTimeout(() => {
    //   this.enabled = !this.enabled;
    // }, 2000);
>>>>>>> 20cf82eee8a683dbdb5f862491ed60e6eb5e34c8
  }

  setSelected(assignment: Assignment){
    this.selectedAssignment = assignment;
  }

  onAddBtnClick(){
    this.formVisibile = true;
<<<<<<< HEAD
    this.selectedAssignment = null;
  }

  onNewAssignment(event: Assignment){
    console.log(event);
    this.assignmentsService
        .addAssignments(event)
        .subscribe(success=> console.log("success"));
    this.formVisibile = false;
=======
>>>>>>> 20cf82eee8a683dbdb5f862491ed60e6eb5e34c8
  }

}
