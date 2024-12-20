import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})  //incase koi fetch call nhi arahi to empty object hai

    
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res) => res.json())  //converting this string data into json
    .then((res) => setData(res[currency]))   // ab data ko json me convert to kardia lkn usya b hold bhi karwana to woh kis pe hoga us k liye hamne usestate ko use kia | or object ko access karne k liye . zaruri nhi hai [] is se bhi ho sakta hai | currency ko is liye rakha k bar bar dependecy change hony pas yeh fetch hoti rahy required currency k hisab se
    console.log(data);
  }, [currency])

  console.log(data);

  return data 
}

export default useCurrencyInfo



 


