export class SubjectDetails {
    public subject_id: string;
    public edition: string;
    public subject_name: string;
    public created_at: string;
    public modified_at: string;

    deserialize(input) {
        this.subject_id = input.subjectId;
        this.edition = input.edition;
        this.subject_name = input.subjectName;
        this.created_at = input.subject_created_date;
        this.modified_at = input.subject_modifed_date;

        return this;
    }

}