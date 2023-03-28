let request = require('request')

// Call the Infura API and check that the address is valid.

request(options, (error, response, body) => {
 if (error) {
	console.error('Error: ', error)
 } else {
	console.log('Response: ', body)
 }
})