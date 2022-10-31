import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: `courses`,
    templateUrl: './courses.component.html'
})
export class CoursesComponent{
    header = "Welecom to courses component";
    courses: Array<String>;

    constructor() {
        let service = new CoursesService();
        this.courses = service.getCourses();
    }
};