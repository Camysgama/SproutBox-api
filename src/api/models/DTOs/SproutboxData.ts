export class SproutboxData {
    public readonly id: string;
    public readonly plan: string;
    public readonly name: string;


    constructor(id: string, name: string, plan: string) {
        this.id = id;
        this.name = name;
        this.plan = plan;
    }
}
