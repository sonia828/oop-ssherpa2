function Big(){
    this.getSize = function () {
        return 'Big';
    } 
}

function Medium() {
    this.getSize = function () {
        return 'Medium';
    }
}

function Small() {
    this.getSize = function () {
        return 'Small';
    }
}
module.exports={'Big':Big,'Medium':Medium, 'Small':Small}