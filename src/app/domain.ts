export class Task {

    id:string;
    title: string;
    state:string;
    creationDate:string; 
    dueDate:string;
    assignedUser:string;
    priority:string;
    parent:string;
    description:string;

    information: Object;

    constructor(title: string, description: string){
        this.title = title;
        this.description = description;
    }
}

