import { SubjectDetails } from '../models/subject';

export class Homework {
    public date: string;
    public class: string;
    public section: string;
    public subjects: SubjectDetails[] = [];
    public created_at: string;
    public modified_at: string;

    deserialize(input) {
        this.date = input.date;
        this.section = input.section;
        input.subjects.forEach(subject => {
            this.subjects.push(new SubjectDetails().deserialize(subject));
        });
        this.created_at = input.HomeWork_created_date;
        this.modified_at = input.HomeWork_modifed_date;

        return this;
    }
}