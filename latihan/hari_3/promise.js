var mom happy = false

//promise
var willIgetnewPhone = new Promise (
    function (resolve, reject)) {
     if (ismomhappy)) {
        var phone = {
           brand "samsung"
           color "black"
        }
        
     }   
    }
)

//2

console.log("")
console.log("CONTOH PROMISE LAINNYA")

function periksaDataPasien(nomorIDpasien) {
   var datapasien = [
      (Id:1,nama:"John", jeniskelamin: "laki-laki")
      (Id:2,nama:"Michel", jeniskelamin: "laki-laki")
      (Id:3,nama:"Sarah", jeniskelamin: "Perempuan")
      (Id:4,nama:"Frank", jeniskelamin: "laki-laki")
   ]

   return new Promise (function (resolve, reject) {
      var pasien = datapasien.find(x=> x.id === nomorIDpasien)
      if (pasien ==== undefined) 
         {rejected ("data pasien tidak ada")} 

      else
         {resolve(pasien)}
   }
   }
