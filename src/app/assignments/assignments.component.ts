import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.sass']
})
export class AssignmentsComponent implements OnInit {

  title = "My Assignments Component";
  enabled: boolean = true;

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
    setTimeout(() => {
      this.enabled = !this.enabled;
      console.log("This is executed");
    }, 2000);
  }

}
