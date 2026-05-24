import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])
  
  const submithandler = (e) =>{
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title, details})
    settask(copyTask)
   

    settitle('')
    setdetails('')
  } 

  return (

    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}

      className='lg:w-1/2 flex flex-col items-start gap-4 p-10 '>
           <h1 className='text-3xl font-bold'>Add Note</h1>


         <input 
        className='px-5 w-full  py-2 border-2 outline-none rounded text-white' type='text' 
        placeholder='Enter Notes Heading' 
        value={title}
        onChange={(e)=> {
          settitle(e.target.value)
        }}
        
        />


        <textarea 
        className='px-5 font-medium  w-full h-32 py-2 border-2 rounded outline-none' 
        placeholder='Enter details' 
        value={details}  
        onChange={(e)=>{
          setdetails(e.target.value)
        }}
       />
        
        

        <button className='bg-white active:bg-gray-400  active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'
        >Add Note
        </button>

      </form>
      <br />

      <div className='lg:w-1/2 lg:broder-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Note</h1>
        <div className='flex flex-wrap gap-5  mt-6 h-full overflow-auto'> 

         {task.map(function(elem, idx){
          return <div key={idx} className='h-52 w-40 rounded-xl p-4 text-black bg-white'>
            <h3 className='leading-tight text-xl font-black'>{elem.title}</h3>
            <h3 className=''></h3>
          </div>
         })} 

        </div>
      </div>
    </div>
  )
}

export default App
