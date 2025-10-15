
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

   periksaDataPasien(2).then function(data) {

      console.log(data)
    
    }



//async/await
function do async() {
    return new Promise (function(resolve, reject) {
        var check = true
        if (check) {resolve ("berhasil") }
        else {rejected ("gagal") }
        }
    }

async function hallo () {
    var result = doAsync()
    console.log(result)
}
