function seleksiNilai (awal, akhir, arr){
  let hasil;

  if(arr.length < 5){
    console.log('Data Harus Lima Atau Lebih!')
  } else if (awal > akhir){
    console.log('Nilai Awal Harus Lebih Kecil Dari Nilai Akhir!')
  } else {
      hasil = arr.sort(function(a, b){
      return a-b;
      })

  let newHasil = hasil.filter (function (x){
  return x >= awal && x <= akhir
  })

  console.log(newHasil)
}

  }


  seleksiNilai(5,10,[1, 5, 6, 5, 4])

function seleksiNilai (awal, akhir, arr){
  let hasil;

  if(arr.length < 5){
    console.log('Data Harus Lima Atau Lebih!')
  } else if (awal > akhir){
    console.log('Nilai Awal Harus Lebih Kecil Dari Nilai Akhir!')
  } else {
      hasil = arr.sort(function(a, b){
      return a-b;
      })

  let newHasil = hasil.filter (function (x){
  return x >= awal && x <= akhir
  })

  console.log(newHasil)
}

  }


  seleksiNilai(5,10,[1, 5, 6, 5, 4])

