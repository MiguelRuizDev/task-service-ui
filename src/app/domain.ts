import * as Collections from 'typescript-collections';

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

    data: Object;

    constructor(title: string, description: string){
        this.title = title;
        this.description = description;
    }
    
}

