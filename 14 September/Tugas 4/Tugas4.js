fetch('http://jsonplaceholder.typicodge.com/users')
.then(data => data.json())
.then(data => (data.map((x) => {
	console.log(x.name)
})))

.catch((err) => {
	console.log('Data Tidak Berhasil Diambil')
})