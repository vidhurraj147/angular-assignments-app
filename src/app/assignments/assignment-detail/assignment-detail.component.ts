import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.sass']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() passedAssignment: Assignment;
  
  constructor(private assignmentsService: AssignmentsService) {

   }

  ngOnInit() {
  }

  onAssignmentSubmitted() {
    this.passedAssignment.submitted = true;
    this.assignmentsService
        .updateAssignments(this.passedAssignment)
        .subscribe(res => console.log(res));
  }

  onDelete(){
    this.assignmentsService
        .deleteAssignment(this.passedAssignment)
        .subscribe(res => console.log(res));
    this.passedAssignment = null;    
  }

}
