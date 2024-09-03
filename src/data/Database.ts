import { Credit } from "../api/models/DTOs/Credit";

export class Database {
    private data: Credit[] = [];

    getData(){
        return this.data;
    }

    newItem(credit: Credit){
        this.data.push(credit);
        return credit;
    }
}

