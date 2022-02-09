class Cord {
    __constructor__(length,connector,coapacity) {
        this._length = null;
        this.length = length;
        this._connector = null;
        this._length = connector;
        this._capacity = null;
        this.capacity = capacity;
    }

    get length(){
        return this._length;
    }

    set length(value) {
        if (value > 0.0) {
            this._length = value;
        } else {
            throw new RangeError("length must be positive ");
        }
    }


    get connector() {
        return this._connector;
    }

    set connector() {
        if (value > 0.0) {
            this._length = value;
        } else {
            throw new RangeError("connector must be ");
        }
    }

    get capacity(){
        return this._capacity;
    }

    set capacity(value) {
        if (value > 0.0) {
            this._capacity = value;
        } else {
            throw new RangeError("capacity must be positive ");
        }
    }
//cord.opposite
    get opposite() {
        if (this._connector.startswith("male")) {
            return "female" + this._connector.substring(4);
        } else {
            return "male" + this._connector.substring(6);
        }
    }

    compatible(equipment) {
        return this.capacity >= equipment.consumption && this.opposite
            && this.capacity >= equipment.consumption && this.opposite

    }
}
class Eqiupment {
    __contructor__(consumption,connector,enabled) {
        this._consumption = consumption;
        this._connector = connector;
        this._enabled = enabled;
    }
}
