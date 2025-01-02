import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Prit",
    age:25
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
      <Card username="React" someobj={newArr} btntext="This is new" />
      <Card username= "Science" />

      {/* <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
          <div className=" bg-black sm:p-10 p-6 rounded-xl">
            <div className="">
              <h5 className="text-xl font-bold text-gray-200">Science of Chemistry</h5>
    
              <p className="mt-2 text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
              </p>
            </div>
          </div>
        </div> */}

{/* 
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/14928820/pexels-photo-14928820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
    </>
  )
}

export default App
