//10 Macam Method Javascript

//1. Array Join = Untuk membuat array menjadi string dengan menyisipkan karakter di setiap value array

// function join(a, b, c, d) {

let arrJoin = [a, b, c, d]
let hasil1 = arrJoin.join(', ')
console.log(hasil1)
}

join('Air', 'Api', 'Bumi', 'Udara')

//2. Array Reverse =  Untuk membalik urutan value suatu array 

reverse = (a, b, c, d) => {
  let arrReverse = [a, b, c, d]
  console.log(arrReverse.reverse())
}

reverse('Air', 'Api', 'Bumi', 'Udara')

//3. Array Concat = Untuk menyambung array baru ke isi array yang sudah ada

concat = (a, b) => {
  let oldConcat = ['Air', 'Api', 'Bumi', 'Udara']
  let newConcat = oldConcat.concat(a, b);
  console.log(newConcat)
}

concat('Petir', 'Darah')

//4. Array Slice = Untuk memotong value suatu array, ada 2 argumen yaitu index awal dan index akhir

slice = (a, b) => {
  let oldSlice = ['Air', 'Api', 'Bumi', 'Udara']
  let newSlice = oldSlice.slice(a, b)
  console.log(newSlice)
}

slice(1, 3)

//5. Array Splice = Berguna untuk menghapus dan menambahkan, ada 3 argumen. Pertama yg dituju, Kedua berapa yg dihapus, Ketiga yg ditambahkan

splice = (a, b, c) => {
  let oldSplice = ['Air', 'Api', 'Bumi', 'Udara']
  oldSplice.splice(a, b, c)
  console.log(oldSplice)
}

splice('Air', 0, 'Tes')

//6. Array Pop =  Berfungsi untuk mengurangi pada index terakhir dan menyimpan nilanya

pop = () => {
  let arrayPop = ['Air', 'Api', 'Bumi', 'Udara']
  a = arrayPop.pop()
  console.log(a)
}

pop()

//7. Array Unshift = Berfungsi untuk menambahkan value ke array, tapi di depan

unshift = (a, b) => {
  let oldUnshift = ['Air', 'Api', 'Bumi', 'Udara'];
  let newUnshift = oldUnshift.unshift(a, b)
  console.log(oldUnshift)
}

unshift('Petir', 'Darah')

//8. Array Shift = MEnghapus bagian awal dari array lalu menyimpan nilainya

shift = () => {
  let arrayShift = ['Air', 'Api', 'Bumi', 'Udara']
  a = arrayShift.shift()
  console.log(arrayShift)
}

shift()

//9. Array to String =  Berfungsi untuk merubah array ke string 

toString = () => {
  let oldToString = ['Air', 'Api', 'Bumi', 'Udara']
  let newToString = oldToString.toString()
  console.log(newToString)
}

toString()

// 10. Foreach = digunakan untuk melakukan perulangan dalam arrayPop

let unsurAlam = ['Air', 'Api', 'Bumi', 'Udara']
unsurAlam.forEach(function (e, i) {
  console.log(`Unsur Alam ke ${i+1} adalah : ${e}` )
})
