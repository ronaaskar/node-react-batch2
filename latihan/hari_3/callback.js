console.log("")
console.log("CALLBACK")
function periksadokter (nomerantri, callback) 
{
    if(nomerantri < 5) {
        callback(false)
    }
    else{
        callback(true)
    }
}

periksadokter(65, function(check)) {
    if(check) {
        console.log("sebentar lagi giliran saya")    
    }
    else {
        console.log("saya jalan jalan dulu")
    }
}

