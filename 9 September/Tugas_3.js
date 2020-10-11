const printSegitiga = '4'
let hasil = '';

//Validasi Apakah printSegitiga Number
if (typeof printSegitiga == 'number'){

for(var i = printSegitiga; i > 0; i--) {

  for(var j = 1; j <= i; j++){
    hasil += j
   }

   hasil +='\n';
  }

  console.log(hasil)
} else {
  console.log('Bukan Number')
}

