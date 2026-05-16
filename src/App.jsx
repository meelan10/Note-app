import React from 'react'

const App = () => {
  const submithandler = (e) =>{
    e.preventDefault()
    console.log('form submitted')

  } 
  return (
    <div className='h-screen w-full flex flex-col lg:flex-row bg-black text-white'>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}
      className='lg:w-1/2 flex flex-col items-start gap-4 p-10 '>
         <input 
        className='px-5 w-full m-2 py-2 border-2 rounded' type='text' 
        placeholder='Enter Notes Heading' 
        />
        <textarea 
        className='px-5 font-medium m-2 w-full h-32 flex py-2 border-2 rounded' 
        placeholder='Enter deatils' 
        text='' >
        </textarea>
        
        <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded'>Add Note</button>

      </form>

      <div className='lg:w-1/2 gap-5 bg-gray-900'>
      <h1 className='text-3xl font-bold'>Your NOtes</h1>
        <div className='flex flex-wrap gap-5  mt-5 overflow-auto'> 

            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
              <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
             <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>

        </div>
      </div>
    </div>
  )
}

export default App
