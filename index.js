// alert('«Я JavaScript!»')

// function getTodos() {
// 	const todos = fetch('https://jsonplaceholder.typicode.com/todos/1')
// 		.then((res) => {
// 			console.log(res)
// 			return res.json()
// 		})
// 		.then((data) => {
// 			console.log(data)
// 			return data
// 		})
// 	console.log(todos)
// }

// async function getAsyncTodos() {
// 	try {
// 		const todos = await fetch('https://jsonplacehoer.typicode.com/todos/1')
// 		console.log('Response :', todos)
// 		const json = await todos.json()
// 		console.log('JSON :', json)
// 		return json
// 	} catch (error) {
// 		console.error('ERROR >>>> ', error)
// 	}
// }
// let admin
// let name
// name = 'Джон'
// console.log(name)
// admin = name
// alert(admin)

// const name = prompt('Как Вас зовут?', '')
// alert(`Ваше имя ${name}`)

const fuBar = (num) => {
if (num % 3 === 0) return 'fu'
    return 'bar'
}
