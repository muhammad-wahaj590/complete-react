import { useState } from 'react'
// import {InputBox} from './Components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)


  const CurrencyInfo = useCurrencyInfo(from)
  const options = Object.keys(CurrencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to])
  }

  return (
    <>
      <h1 className='text-4xl'>Currency Converter</h1>
    </>
  )
}

export default App
