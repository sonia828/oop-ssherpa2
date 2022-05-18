class Animal {
    constructor(size){
        this._size = size;
    }
}

class Dog extends Animal {
    constructor(size){
        super(size);
    }
    getString() {
        return `${this._size.getSize()} Dog`;
    };
}

class Cat extends Animal {
    constructor(size){
        super(size);
    }
    getString() {
        return `${this._size.getSize()} Cat`;
    };
}

class Fish extends Animal {
    constructor(size){
        super(size);
    }
    getString() {
        return `${this._size.getSize()} Fish`;
    };
}
module.exports={'Animal':Animal,'Dog':Dog,'Cat':Cat, 'Fish':Fish}