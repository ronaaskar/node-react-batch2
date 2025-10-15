//1

class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  // Getter dan Setter untuk name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Getter dan Setter untuk legs
  get legs() {
    return this._legs;
  }

  set legs(newLegs) {
    this._legs = newLegs;
  }

  // Getter dan Setter untuk cold_blooded
  get cold_blooded() {
    return this._cold_blooded;
  }

  set cold_blooded(value) {
    this._cold_blooded = value;
  }
}

// Contoh penggunaan
var sheep = new Animal("shaun");

console.log(sheep.name);          // "shaun"
console.log(sheep.legs);          // 4
console.log(sheep.cold_blooded);  // false

sheep.legs = 3;                   // ubah jumlah kaki
console.log(sheep.legs);          // 3


//1b
class Ape extends Animal {
  constructor(name) {
    super(name);     // memanggil constructor class Animal
    this._legs = 2;  // Ape memiliki 2 kaki
  }

  yell() {
    console.log("Auooo");
  }
}

// ✅ Class Frog (turunan dari Animal)
class Frog extends Animal {
  constructor(name) {
    super(name);     // memanggil constructor class Animal
  }

  jump() {
    console.log("hop hop");
  }
}

// --- Contoh penggunaan ---
var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"
sungokong.legs = 2;
console.log(sungokong.name);          // "kera sakti"
console.log(sungokong.legs);          // 2
console.log(sungokong.cold_blooded);  // false

console.log("---------------------");

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"
console.log(kodok.name);              // "buduk"
console.log(kodok.legs);              // 4 (default dari Animal)
console.log(kodok.cold_blooded);      // false


//2

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }

  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    const output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

// --- Contoh penggunaan ---
const clock = new Clock({ template: 'h:m:s' });
clock.start();

// Tekan Ctrl + C di terminal untuk menghentikan clock
