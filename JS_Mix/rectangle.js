class Rectangle{
    constructor(length,breadth){
        this._length=length;
        this._breadth=breadth;
    }
    get length(){
        return this._length;

    }
    set length(value) {
        if (value > 0.0) {
            this._length= value;
        } else {
            throw new RangeError("Length must be positive");
        }
    }
    get breadth(){
        return this._breadth;

    }
    set breadth(value) {
        if (value > 0.0) {
            this._breadth= value;
        } else {
            throw new RangeError("Breadth must be positive");
        }
    }
}
class Height {
    constructor(heigth){
        this._height=heigth;
    }
    get height(){
        return this._height
    }
    set height(value) {
        if (value > 0.0) {
            this._height= value;
        } else {
            throw new RangeError("height must be positive");
        }
    }
}

var RecMixin = (superClass) => class extends superClass{
    constructor(length,breadth){
        super(length,breadth);  
    }
}

class Volume extends RecMixin(Height){
    constructor(height,volume){
        super(height)
        this._volume=volume;
    }
    get volume(){
        return this._volume
    }
    Calvolume(){
        return this._length*this._breadth*this._height;
    }
}

var v1 =new Volume()
v1.Calvolume();

module.exports={
    'Rectangle':Rectangle,
    'Height': Height, 
    'RecMixin':RecMixin, 
    'Volume':Volume
}