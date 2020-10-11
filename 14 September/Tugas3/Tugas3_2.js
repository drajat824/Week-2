const lingkaran = (jari, dicari) => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{

	if(dicari == 'keliling' || dicari == 'luas') {

		if (typeof jari == 'number') {

			if (dicari == 'luas') {

				if (jari % 7 == 0) {
				let luas = (22/7) * jari * jari
				resolve(luas)
				} 	

				else {
				let luas = 3.14 * jari * jari
				resolve(luas)
				}
		}

		 	else if (dicari == 'keliling') {

				if(jari % 7 == 0){
				let keliling = 2 * (22/7) * jari
				resolve(keliling)
				}

				else {
				let luas = 2 * 3.14 * jari
				resolve(keliling)
				}
		}
	}	

		else{
			reject(new Error('Bukan Angka'))
		}

	}

	else {
		reject(new Error('Yang anda masukan bukan luas/keliling'))
	}


	}, 100)
 
	})
}

lingkaran ("7", 'keliling')
.then((res) => {
	console.log(res)
})
.catch((err) => {
	console.log(err.message)
})

// async function cariLink (jari, dicari){
// 	try {
// 		let result = await lingkaran(jari, dicari);
// 		console.log(result)
// 	} catch (error){
// 		console.log(error.message)
// 	}
// }

// cariLink("7", 'luas')



