const cekDiskon = (harga, berapa) => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{

			let apakahBarang = true
			let diskon = (harga * berapa) / 100
			let total = harga - diskon

			if(apakahBarang == true){

				if (typeof harga != "number" || typeof berapa != "number" || berapa > 100) {
				resolve('Masukan Angka!/ Diskon Terlalu Tinggi')
				} else {
					resolve(total)
				}

			} else {
				reject(new Error('Tidak Sedang Di Diskon'))
			}

	}, 3000)
 
	})
}

cekDiskon("2000", 100)
.then((res) => {
	console.log(res)
})
.catch((err) => {
	console.log(err.message)
})

// async function disk(harga, berapa){
// 	try {
// 		let result = await cekDiskon(harga, berapa);
// 		console.log(result)
// 	} catch (error){
// 		console.log(error.message)
// 	}
// }

// disk(500, 101)



