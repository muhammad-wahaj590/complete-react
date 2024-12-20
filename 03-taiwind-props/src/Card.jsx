import React from 'react'

// btnText="visit me" yeh default props hai 
// {btnText || "nikal ab"}  yeh bhi ek tareeqa hai default props ko set karne ka lkn best way yeh ahi k is tarah se kardia jaye kaam ko pehlay waly ki tarah 
function Card({username, btnText="visit me"}) {
  return (
    <div>
      <div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">{username}</h1>
    <p class="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    {/* default prop pass  */}
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText || "nikal ab"} →  
    </button>
  </div>
</div>
    </div>
  )
}

export default Card
