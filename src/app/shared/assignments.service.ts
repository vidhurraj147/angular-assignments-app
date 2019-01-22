import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

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

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignments(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of('Assignment added!!');
  } 

  updateAssignments(assignment: Assignment): Observable<string> {
    this.assignments
        .forEach((assignment, i) => { 
          // assignment given from updateAssignment == forEach assignment
            if(assignment === assignment){ 
              this.assignments[i] = assignment;
            }
        });
        return of('Assignment Updated');
  }

  deleteAssignment(deleteAssignment: Assignment): Observable<String> {
      this.assignments
          .forEach((assignment, i) => {
             if(assignment === assignment){
                // this.assignments.pop(assignment);
                this.assignments.splice(i, 1);
             } 
          });
          return of("Assignment Deleted");
  }
  // getAssignments(): Assignment[] {
  //   return this.assignments;
  // }

}
