import { LOAD_COURSES } from './actionTypes'
import data from '../../json/courses.json';

export const loadAllCourses = () => {
    let courses = data.TopCourses;
    return {
        type: LOAD_COURSES,
        payload: courses
    }
}

