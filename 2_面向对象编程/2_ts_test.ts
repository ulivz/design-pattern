class People {
    // TS在这里真地实现了private吗?
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name
    }
}

class FrontEndDeveloper extends People{
    public framework: string;
}


// TS在这里真地实现了private吗?