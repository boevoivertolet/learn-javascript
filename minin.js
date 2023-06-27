const delay = (ms) => {
	return new Promise((resolve) => setTimeout(() => resolve(), ms))
}
// delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

//then

// function fetchTodos() {
// 	console.log('fetch started')
// 	return delay(2000).then(() => fetch(url).then((res) => res.json()))
// }

// fetchTodos()
// 	.then((data) => {
// 		console.log('Data: ', data)
// 	})
// 	.catch((e) => console.error(e))

//async
async function fetchAsyncTodos() {
	try {
		console.log('try')
		await delay(2000)
		console.log('delay resolve')
		const response = await fetch(url)
		console.log('fetch resolve')
		const data = await response.json()
		console.log('data resolve')
		console.log('Data: ', data)
	} catch (e) {
		console.error(e)
	} finally {
		console.log('finally')
	}
}

fetchAsyncTodos()
