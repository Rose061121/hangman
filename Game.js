

export default class Game  {
  constructor(){
    this.word = 'apple',
    this.badLetters = [],
    this.words = ['pickle', 'jubilee', 'harvest', 'journey', 'drake redcrest']
  }

  isLetterInWord = (letter, word) => {
    return word.indexOf(letter)
}

getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)]
  
}

removeLettersFromWord = (letter) => {
  let wordArray = this.word.split('')
  let indexArray = []
  let arrayLength = wordArray.length
  for (i = 0; i < arrayLength; i++) {
    if (letter == wordArray[i]){
      indexArray.push(i)
      wordArray.splice(i, 1, '_')
      }
  }
   return indexArray
}

addBadLetter = (letter) => {
  badLetters.push(letter)
 return badLetters
 
}

entireStringIsUsed = (word = '') => {
  let wordArray = word.split('')
  let arrayLength = wordArray.length
   for (i = 0; i < arrayLength; i++) {
   if (wordArray[i] != '_'){
     return false
     } 
     return true
 }
}

}