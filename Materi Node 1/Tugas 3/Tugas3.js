
function DevideAndSort (input) {
	let str = input.toString()

	let loop = str.match(/([^0$]+)/g)
	let toArr =''
	let temp = ''
	let hasil = ''

if(typeof input == 'number') {

for(i = 0; i <= loop.length-1; i++) {

		temp += loop[i]
		
		toArr = Array.from(temp).sort((a, b) => {
			return a - b
		}).join('')

		hasil += toArr

		temp = ''
		
	}
console.log(Number(hasil))
} else {
	console.log('Bukan Angka!')
}



}


DevideAndSort(32103210987)
DevideAndSort("32103210987")
