import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const[data,setData] = useState(0)
    // useEffect (() => {
    //     fetch("https://api.github.com/users/shreyashbogar07")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[] )
  return (
    <div className='text-center m-4 bg-blue-400 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt='Git Picture' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async  () => {
    const response = await fetch("https://api.github.com/users/shreyashbogar07")
    return response.json()
}