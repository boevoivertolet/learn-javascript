const word0 = 'Wassap'
const word1 = 'Bye'
const word2 = 'Programmer'

const word0trans = 'Здарова'
const word1trans = 'Покеда'
const word2trans = 'Программист'

const questionsCount = 3
const correctAnswerMinPercent = 50

const finishSuccessMessage = 'Молодец!'
const finishUnsuccessMessage = 'Плохо!, старайся лучше.'

let correctAnswersCount = 0
const userCorrectAnswerPercent = (correctAnswersCount / questionsCount) * 100

// ------------------------

const userAnswer0 = prompt(word0, '')
alert(userAnswer0 === word0trans)
if (userAnswer0 === word0trans) {
	correctAnswersCount = correctAnswersCount++
}

const userAnswer1 = prompt(word1, '')
alert(userAnswer1 === word1trans)
if (userAnswer1 === word1trans) {
	correctAnswersCount = correctAnswersCount++
}

const userAnswer2 = prompt(word2, '')
alert(userAnswer2 === word2trans)
if (userAnswer2 === word2trans) {
	correctAnswersCount = correctAnswersCount++
}

if (userCorrectAnswerPercent > correctAnswerMinPercent) {
	alert(finishSuccessMessage)
} else {
	alert(finishUnsuccessMessage)
}
