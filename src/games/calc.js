// src/games/calc.js
import runEngine from '../index.js' 

const description = 'What is the result of the expression?'

const getRoundData = () => {

  const question = '5 + 10'
  const answer = '15'
  return [question, answer]
}

export default () => runEngine(description, getRoundData)
