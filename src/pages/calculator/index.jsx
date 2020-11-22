import { useState } from 'react';
import Button from '../../components/button';
import './main.css'

const operatorsSigns = ['/', '*', '+', '-'];
const memoriesButton = ['M+', 'M-', 'MC', 'MR'];

// M+ and M- stock the result and display him
// MC Clear the memory
// MR Display the results of all results (result + secondResult - ThirdResult...)

const Calculator = () => {
  const [result, setResult] = useState('')
  const [displayResult, setDisplayResult] = useState(false)
  const [previousResult, setPreviousResult] = useState('');
  const [previousOperator, setPreviousOperator] = useState();
  const [memoriesResults, setMemoriesResults] = useState([]);
  const [memoriesOperators, setMemoriesOperator] = useState([]);

  const operators = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '/' : (a, b) => a / b,
    '*' : (a, b) => a * b,
  }
  
  const cancel = () => {
    setDisplayResult(false)
    setPreviousOperator('')
    setPreviousResult('')
    setResult('')
  }

  const addNumber = item => {
    if (displayResult) {
      setDisplayResult(false)
      setResult(item)
      return
    }
    setResult(result + item)
  }

  const calcul = operator => {
    if (result === '' ) {
      return;
    }

    if (displayResult) {
      setPreviousResult(result)
      setPreviousOperator(operator)
      return;
    }

    if (previousResult === '') {
      setDisplayResult(true)
      setPreviousResult(result)
      setPreviousOperator(operator)
      return;
    }

    const newResult = operators[previousOperator](parseFloat(previousResult, 10), parseFloat(result, 10))
    setResult(newResult)
    setPreviousResult(result)
    setDisplayResult(true)
    setPreviousOperator(operator)
  }

  const handleMemoryButton = memoryOperator => {
    setMemoriesOperator([...memoriesOperators, memoryOperator[1]]);
    const newResult = operators[previousOperator](parseFloat(previousResult, 10), parseFloat(result, 10))
    setResult(newResult)
    setPreviousResult('')
    setDisplayResult(true)
    setPreviousOperator()   
    setMemoriesResults([...memoriesResults, newResult])
  }

  const handleMemoriesButton = memoryOperator => {
    if (previousOperator === undefined || (displayResult && (memoryOperator === 'M+' || memoryOperator === 'M-'))) {
      return;
    }

    if(memoryOperator)

    switch(memoryOperator) {
      case 'M+':
      case 'M-':
        handleMemoryButton(memoriesButton)
        break;
      case 'MC':
        setMemoriesOperator([]);
        setMemoriesResults([])
        break;
      case 'MR':
        if (!memoriesResults.length) {
          break;
        }
        const newMemoriesResult = memoriesResults.reduce((acc, result, index) => {
          return operators[memoriesOperators[index]](acc, result)
        })
        setResult(newMemoriesResult)
        break;
      default:
        break;
    }
  }

  const equal = () => {
    if (previousResult === '') {
      return;
    }
    const newResult = operators[previousOperator](parseFloat(previousResult, 10), parseFloat(result, 10))
    setDisplayResult(true)
    setPreviousResult(newResult)
    setResult(newResult)
  }

  return (
    <div className="w-52 m-auto shadow-sm p-3 bg-black">
      <div className="screen bg-gray-500 rounded mb-3 p-3">
        <p className="text-white text-right">{result}</p>
      </div>
      <div className="w-full">
        <div className="flex justify-around">
          {memoriesButton.map(memory => <Button key={memory} text={memory} handleClick={handleMemoriesButton} />)}
        </div>
        <div className="flex">
          <div className="w-3/4 flex justify-around flex-wrap">
            {[...Array(10).keys()].map(number => <Button key={number} text={number.toString()} handleClick={addNumber} />)}
            <Button text="." handleClick={addNumber} />
            <Button text="=" handleClick={equal} />
          </div>
          <div className="w-1/4 flex justify-center flex-wrap">
            {operatorsSigns.map(operator => <Button key={operator} text={operator} handleClick={calcul} />)}
          </div>
        </div>
        
        <div className="w-1/2 flex justify-around">
          <Button text="AC" handleClick={cancel} />
        </div>
      </div>
    </div>
  )
}

export default Calculator;