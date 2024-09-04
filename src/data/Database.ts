import { SproutboxData } from "../api/models/DTOs/SproutboxData";

export class Database {
    private data: SproutboxData[] = [];

    getData(){
        return this.data;
    }
}

