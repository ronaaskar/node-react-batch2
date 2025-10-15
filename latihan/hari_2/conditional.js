// contoh log kosong (boleh dihapus juga)
console.log('');

// Contoh if-else
if (true) {
    console.log("eksekusi hasil true"); 
}

if (false) {
    console.log("eksekusi hasil false");
}

var mood = "happy";

if (mood == "happy") {
    console.log("hari ini saya sedang bahagia");
} else if (mood == "sedih") {
    console.log("hari ini saya sedang sedih");
}


var minimarketStatus = "open"
var telur = "soldout"
var buah = "Ready"

if (minimarketStatus == "open") {
    console.log("saya akan membeli telur dan buah");

    if (telur == "soldout" && buah == "soldout") {
        console.log("belanjaan saya kurang lengkap");
    } else if (telur == "soldout") {
        console.log("telur habis, buah ready");
    } else if (buah == "soldout") {
        console.log("buah habis, telur ready");
    } else if (telur == "Ready" && buah == "Ready") {
        console.log("Belanjaan saya lengkap");
    }

} else {
    console.log("Minimarket tutup, saya pulang saja");
}





var buttonpushed = 1;
switch(buttonpushed) {
    case 1 : console.log("matikan TV"); break;
    case 2 : console.log("turunkan volume TV"); break;
    case 3 : console.log("tingkatkan voluem TV"); break;
    case 4 : console.log("matikan suara TV"); break;
    default : console.log("tidak terjadi apa-apa"); break;
}

console.log("ternary Operator")
console.log("")




var umur = 17
if(umur >= 17) {
    console.log("boleh memiliki KTP")
}

else {
    console.log("Tidak boleh memiliki KTP")
}

var cekKTP = umur >= 17 ? "Boleh memiliki KTP : Tidak Boleh Memiliki KTP"
console.log(cekKTP)