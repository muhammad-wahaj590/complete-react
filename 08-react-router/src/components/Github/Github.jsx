import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

const data = useLoaderData()

  // ab yeh kaam ham async await se bhi kar sakty bina useeffect use kiye is tarah se data fetch karne k liye 
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/muhammad-wahaj590')
    //     .then((res) => res.json())
    //     .then((res) => setData(res))
    // }, [])
  return (
    <div>
      <h1 className='text-center bg-gray-500 text-3xl p-4 text-white'>Github Follwers: {data.followers} </h1>
      <img src={data.avatar_url} alt=""  width={300}/>
    </div>
  )
}

export default Github

// is se kaam to ho raha hai lkn optimize tareeqa nhi hai yeh kyon k jab  bhi github pe click kar rahy ek lag araha k thoray wait k bad sisplay ho rahy followers to us k liye ham route main loaders ka use karen ge or wahan se hamra yeh lag khatam ho saky ga 

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/muhammad-wahaj590`)
  return response.json()
}

//is tarah se ham ne or optimizze kaam kar lia pehlay hamara data github ka woh bad main show ho raha tha page k render hony k bad lkn router k loader method se yeh usi waqt call ho jaye ga ab data jese hi page render hoga 