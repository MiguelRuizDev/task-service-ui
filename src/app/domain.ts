export class Task {

    id:number;
    title: string = "none";
    state:string = "ACTIVE";
    creationDate:string = "now";
    dueDate:string = "next week";
    assignedUser:string = "anyone";
    priority:string = "NORMAL";
    parent:string = "none";
    description:string = "none";

    constructor(title: string, description: string){
        this.title = title;
        this.description = description;
    }
}

