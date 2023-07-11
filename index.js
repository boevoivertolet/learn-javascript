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

// let i = 1
// while (i <= 5) {
// 	console.log(i)
// 	i++
// }
// let arr = [11, 21, 13, 14, 51, 16, 71, 18, 91, 10]

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 === 0) {
// 		console.log(arr[i])
// 	}
// }
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
// 	arr[i] = arr[i].toString()
// }
// console.log(arr)
// // let myArray = [10, 20, 30, 40, 50]

// for (let i = 0; i < myArray.length; i++) {
// 	console.log(myArray[i])
// }

// let sum = 0

// while (true) {
// 	let value = +prompt('Введите число', '')

// 	if (!value) break // (*)

// 	sum += value
// }
// alert('Сумма: ' + sum)

// for (let i = 0; i < 10; i++) {
// 	if (i % 2 == 0) continue
// 	console.log(i)
// }
// let i = 111
// while (i < 5) alert(i)

// четные числа от 2 до 10

// for (let i = 2; i <= 10; i++) {
// 	if (i % 2 !== 0) continue
// 	console.log(i)
// }

// заменить for на while

// for (let i = 0; i < 3; i++) {
// 	alert(`number ${i}!`)
// }
// let i = 0
// while (i < 3) {
// 	alert(`number ${i}!`)
// 	i++
// }


/*// Повторять цикл, пока ввод неверен
// важность: 5
//
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//
//     Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
//
//     Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
//Сделал я
// for (let i = 0; i < 102; i++) {
//      i = prompt('number > 100', '')
// }
// let i = 0;
// while ( i <= 100) {
//     i = prompt('number > 100', '')
//     if (i === null) break
// }

/////////////////////////////////
// решение учебника
// let num;
//
//
// do {
//     num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);
////////////*/

// Вывести простые числа
// важность: 3
//
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
//
//     Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
//
// Напишите код, который выводит все простые числа из интервала от 2 до n.
//
//     Для n = 10 результат должен быть 2,3,5,7.
//
// P.S. Код также должен легко модифицироваться для любых других интервалов.

// let n = 4;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) {
//         console.log(1);
//         for (let j = 2; j < i; j++) {
//             console.log(2);
//             if (i % j === 0) {
//                 continue nextPrime;
//             }
//             console.log(3);
//         }
//          console.log('i:',i);
//     }