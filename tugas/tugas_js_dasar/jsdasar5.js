var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" +
             abjad.indexOf("E") + "-" +
             abjad.indexOf("L") + "-" +
             abjad.indexOf("L") + "-" +
             abjad.indexOf("O");
console.log("kode 1: " + kode1);

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" +
             abjad.indexOf("O") + "-" +
             abjad.indexOf("R") + "-" +
             abjad.indexOf("L") + "-" +
             abjad.indexOf("D");
console.log("kode 2: " + kode2);

// 3. password ketiga : IMREADY
var kode3 = abjad.indexOf("I") + "-" +
             abjad.indexOf("M") + "-" +
             abjad.indexOf("R") + "-" +
             abjad.indexOf("E") + "-" +
             abjad.indexOf("A") + "-" +
             abjad.indexOf("D") + "-" +
             abjad.indexOf("Y");
console.log("kode 3: " + kode3);
