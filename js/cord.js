class Cord {
    __constructor__(length,connector,coapacity) {
        this._length = length;
        this._length = connector;
        this._capacity = capacity;
    }

    get connector() {
        return this._connector;
    }

    set connector() {
        this.+connector = value;
    }
//cord.opposite
    get opposite() {
        if (this._connector.startswith("male")) {
            return "femail" + this._connector.substring(4);
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
