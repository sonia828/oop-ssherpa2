class Circle{
    constructor(radius,area){
        this._radius=radius;
        this._area=area;
    }
    get radius(){
        return this._radius;

    }
    set radius(value) {
        if (value > 0.0) {
            this._radius= value;
        } else {
            throw new RangeError("Radius must be +ve");
        }
    }
    get area(){
        return this._area
    }
    Area(){
        return 3.14*this._radius*this._radius;
    }

}
module.exports={'Circle':Circle}