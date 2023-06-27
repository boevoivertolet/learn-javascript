// alert('«Я JavaScript!»')

function getTodos() {
	const todos = fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((res) => {
			console.log(res)
			return res.json()
		})
		.then((data) => {
			console.log(data)
			return data
		})
	console.log(todos)
}

async function getAsyncTodos() {
	try {
		const todos = await fetch('https://jsonplacehoer.typicode.com/todos/1')
		console.log('Response :', todos)
		const json = await todos.json()
		console.log('JSON :', json)
		return json
	} catch (error) {
		console.error('ERROR >>>> ', error)
	}
}
