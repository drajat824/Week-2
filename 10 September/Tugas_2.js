const name = [
    'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 
    'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirde', 'Diana',
    'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
]

function search(k, j, callback) { 

const cari = name.filter(function(a){ 
  return a.match(k)
  })


const hasil = cari.slice(0, j);
  callback(hasil)

}


function searchName(output) {
    console.log(output)
}


search('an', 1, searchName)
