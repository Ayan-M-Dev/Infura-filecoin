let request = require('request')


// Call the Infura API and check that the address is valid.
let options = {
    url: 'https://filecoin.infura.io',
    method: 'post',
    headers: {
       'content-type': 'application/json'
    },
    auth: {
      user: '2NZyKqFdKMxQnqxvyNObj4jPrcC',
      pass: '9f799f9942188d380becd74014b45e04'
    },
    body: `{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "Filecoin.ChainHead"
    }`
}

request(options, (error, response, body) => {
 if (error) {
	console.error('Error: ', error)
 } else {
	console.log('Response: ', body)
 }
})