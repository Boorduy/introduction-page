import React, { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
 // const [data, setData] = React.useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/Boorduy')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    const data = useLoaderData()
   
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <div className='items-center pt-32'>
    <div>Github followers: 
    {data.login}</div>
    <div>Github followers: 
    {data.followers}</div>
    <div>Github creation date: {data.created_at}</div>
    Github repositories: 
    {data.public_repos}
    <img className='flex pb-20' src={data.avatar_url} />
        </div>
    </div>
  )
}

export default Github

