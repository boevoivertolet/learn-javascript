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

// const fuBar = (num) => {
// if (num % 3 === 0) return 'fu'
//     return 'bar'
// }
// let n = 2;
// n = n + 5;
// n = n * 2;

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
//
// alert(+a + +b); // 12

// let age = prompt('Возраст?', 18);
//
// let message = (age < 3) ? 'Здравствуй, малыш!' :
//     (age < 18) ? 'Привет!' :
//         (age < 100) ? 'Здравствуйте!' :
//             'Какой необычный возраст!';
//
// alert( message );

// let name = prompt('Какое официальное название языка ?', '')
//
// if(name === 'ECMAScript') {
//     alert('Верно !')
// }else{
//     alert('Не знаете? ECMAScript!')
// }
//
// let num = prompt('число :', '')
//
// if (num > 0) {
//     alert(1)
// } else if (num < 0) {
//     alert(-1)
// } else {
//     alert(0)
// }

// let result;
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }
// result = (a + b < 4) ?  'Мало' : 'Много'

// let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }
// let login =prompt('login ?')
//
// message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '')  ? 'Нет логина' : ''
// alert(message)

// let age = prompt('age  :');
//
// // if (age <= 14 || age >= 90) {
// //     alert('correct')
// // } else {
// //     alert('error')
// // }
//
// if (!(+age >= 14 && +age <= 90)) {
//     alert('correct')
// } else {
//     alert('error')
// }

// let user = prompt('login:', '')
//
// if (user === 'Admin') {
//     let pass = prompt('password:', '')
//     if (pass !== '123' && pass !== null) {
//         alert('incorrect password')
//     } else if (pass === '123') {
//         alert('hello')
//     } else {
//         alert('canceled')
//     }
// } else if (user !== 'Admin' && user !== null) {
//     alert('who are u.. ?')
// } else {
//     alert('canceled')
// }

// if (user === 'Admin') {
//     let pass = prompt('password:', '')
//     if (pass === '123') {
//         alert('hello')
//     } else if (pass === '' || pass === null) {
//         alert('canceled')
//     } else {
//         alert('incorrect password')
//     }
// } else if (user === '' || user === null) {
//     alert('canceled')
// } else {
//     alert('who are u.. ?')
// }
