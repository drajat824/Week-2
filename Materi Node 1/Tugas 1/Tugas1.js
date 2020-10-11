function cekPalindrom (input) {

if(typeof input == 'string') {

var teks = input.toLowerCase()
var teks2 = ""
i = teks.length-1

for(i; i >= 0; i--) {
  teks2 = teks2 + teks[i]
}

if(teks == teks2) {
  console.log("Palindrom")
} else{
  console.log ("Bukan Palindrom")
  } 
}

else {
  console.log('Inputan harus string')
}

}

cekPalindrom("mlm")
cekPalindrom("mlr")
cekPalindrom(13)