import { Component } from "@angular/core";

@Component({
    selector: `courses`,
    templateUrl: './courses.component.html'
})
export class CoursesComponent{
    header = "Welecom to courses component";
    courses = ["course-1", "course-2", "course-3"];
};