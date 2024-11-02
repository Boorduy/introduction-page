import React from 'react'

import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    //is a hook that we use for userid we set in main.jsx
  return (
    <div className='bg-red-300 bg-opacity-5 text-black text-3xl text-center py-5'>Welcome {userid}!
    <br></br>
    Feel Free to check other tabs</div>
  )
}

export default User