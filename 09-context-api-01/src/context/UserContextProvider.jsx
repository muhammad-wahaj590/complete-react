//context provider ko jsx banana hoga 
//children ka matlab hai k jo araha hi us ka as it is esi likhdo
// lkn uska wrap karna pary ga jis k liye ham UserContext ko use karen ge 

import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({children}) {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
    
  )
}

export default UserContextProvider

