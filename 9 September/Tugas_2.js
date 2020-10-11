//Mengisi Nilai
const mtk = 90;
const bahasaIndonesia = 90;
const bahasaInggris = 90;
let ipa;

let jumlah = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4;
let grade;

//Validasi Apakah Nilai Kosong
if(
  mtk != null &&
  bahasaIndonesia != null &&
  bahasaInggris != null &&
  ipa != null
)
{

//Validasi Apakah Nilai Angka
if(
  typeof mtk == 'number' &&
  typeof bahasaIndonesia == 'number' &&
  typeof bahasaInggris == 'number' &&
  typeof ipa == 'number'
) {

//Cek Grade
if(jumlah >= 0 && jumlah <= 59) {
  grade = 'E'
} else if(jumlah >= 60 && jumlah <= 69) {
  grade = 'D'
} else if(jumlah >= 70 && jumlah <= 79) {
  grade = 'C'
} else if(jumlah >= 80 && jumlah <= 89) {
  grade = 'B'
} else if(jumlah >= 90 && jumlah <= 100) {
  grade = 'A'
} else {grade = 'Nilai Terlalu Tinggi'}
//Akhir Cek Grade

} else {console.log('Salah Satu Nilai Bukan Angka')}
//Akhir Validasi Apakah Nilai Angka

} else {
  console.log('Semua NIlai Belum Diisi')
}
//Akhir Validasi Apakah Nilai Kosong

console.log(`Rata - rata : ${jumlah}`)
console.log(`Grade : ${grade}`)