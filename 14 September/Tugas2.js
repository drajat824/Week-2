const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

const proses = (n, m) => {

if (n == null) {
	m.map((e) => {
		console.log(e)
	})
} else {
	console.error(n.message)
}

}

getMonth(proses)