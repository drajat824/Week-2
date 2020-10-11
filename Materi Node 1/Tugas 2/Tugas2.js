const reverseWord = ((input) => {

let temp = ''
let arr = []
let hasil = ''

if(typeof input == 'string') {

for(i = 0; i < input.length; i++) {

	if (input[i] == ' ') {
		arr.push (temp)
		temp = ''
	} else {
		temp += input[i]
		if(i == input.length-1) {
		arr.push(temp)
		}
	}
}

for(j = arr.length-1; j >= 0; j--) {
	hasil = hasil + arr[j] + ' '
}
console.log(hasil)
} else {
	console.log('Harus Masukan String!')
}


})

reverseWord("Cantik Itu Kamu")
reverseWord(23423)



