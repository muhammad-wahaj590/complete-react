// yeh step 4 hai 
//is main ham seekhen ge data len ge kese
//is main setUser ki jagah user len ge bas kyon k hamen data lena hai method nhi 

import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
const {user} = useContext(UserContext)

if(!user) return <div>Please Login</div>
return <div>Welcome {user.username}</div>
}

export default Profile


