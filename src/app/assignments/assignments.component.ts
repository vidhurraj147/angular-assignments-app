import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.sass']
})
export class AssignmentsComponent implements OnInit {

  title = "My Assignments Component";

  assignments = [
    {
      name: "one",
      dueDate: '2018-01-01',
      submitted: true
    },{
      name: "two",
      dueDate: '2019-01-01',
      submitted: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
