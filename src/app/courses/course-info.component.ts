import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {
  courseId!: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // @ts-ignore: Object is possibly 'null'
    this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
  }
}
