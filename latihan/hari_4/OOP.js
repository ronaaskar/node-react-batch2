class Car {
    constructor(brand, factory) {
        this.brand = brand
        this.factory = factory
        this.sound = "honk...honk"

    }

    present(x) {
    return "Hello, my name is" + x + ", and my factory is " + this.factory;
  }
}


var innovam = new Car("Innovam", "Toyotwo");
console.log(innovam);
console.log(innovam.present("John"));

innovam.warna = "Red";
console.log(innovam);




class person {
    constructor(nama) {
        this.name = nama
        this.age = ""
    }

    berjalan() {
        return"TAP TAP TAP"
    }
}

class Guru extends Orang {
    constructor(nama) {
        super(nama), 
        this.school = ""
    }
}
    
var guru = new Guru("Abidin")
guru.age = 20 
guru.school = "SMPN 1"

console.log(guru)
console.log(berjalan)
    
