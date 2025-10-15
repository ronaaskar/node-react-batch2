var filterBookPromise = require('./promise3.js');

// ✅ Menggunakan Promise (then & catch)
filterBookPromise("black", 2019)
  .then(result => {
    console.log("Mobil berwarna hitam tahun 2019 ditemukan:");
    console.log(result);
  })
  .catch(err => console.log(err.message));

filterBookPromise("silver", 2017)
  .then(result => {
    console.log("Mobil berwarna silver tahun 2017 ditemukan:");
    console.log(result);
  })
  .catch(err => console.log(err.message));

// ✅ Menggunakan Async/Await
async function getCars() {
  try {
    const car1 = await filterBookPromise("grey", 2019);
    console.log("Mobil berwarna abu-abu tahun 2019 ditemukan:");
    console.log(car1);
  } catch (error) {
    console.log(error.message);
  }

  try {
    const car2 = await filterBookPromise("grey", 2018);
    console.log("Mobil berwarna abu-abu tahun 2018 ditemukan:");
    console.log(car2);
  } catch (error) {
    console.log(error.message);
  }

  try {
    const car3 = await filterBookPromise("black", 2020);
    console.log("Mobil berwarna hitam tahun 2020 ditemukan:");
    console.log(car3);
  } catch (error) {
    console.log(error.message);
  }
}

getCars();
