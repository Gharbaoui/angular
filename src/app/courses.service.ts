export class CoursesService{
    constructor()
    {
        console.log(`service is used`);
    }
    getCourses()
    {
        return ["course-1", "course-2", "course-3"]
    }
};