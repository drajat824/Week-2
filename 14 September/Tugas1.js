const cekHariKerja = (day) => { 
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
			let cek = dataDay.find((item) =>{
				return item == day
			})
			if(day != 'Senin' && day != 'Selasa' && day != 'Rabu' 
				&& day != 'Kamis' && day != 'Jumat' && day != 'Sabtu' 
				&& day != 'Minggu') {

				console.log('yang kamu masukan bukan hari')
			} else {
			if(cek){
				resolve(cek)
			} else{
				reject(new Error('Hari ini bukan hari kerja'))
			}}
		}, 3000)
	})
}


// cekHariKerja('Minggu')
// .then((res) => {
// 	console.log(`${res} adalah Hari Kerja`)
// })
// .catch((err) => {
// 	console.log(err.message)
// })

//then digunakan untuk menampung hasil resolve dari prmoise, sedangkan catch digunakan untuk menampung reject pada proses asynchronous

async function cekHari(x){
	try {
		let result = await cekHariKerja(x);
		console.log(`${result} adalah Hari Kerja`)
	} catch (error){
		console.log(error.message)
	}
}

cekHari(4)

//sama seperti then dan cetch, try digunakan untuk menampung hasil resolve dari promise, sedangkan catch juga digunakan untuk menampung reject pada proses synchrons

