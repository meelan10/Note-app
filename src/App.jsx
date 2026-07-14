import { useState } from 'react'

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

  const deleteNote = (idx)=> {
    const copyTask =[...task];
    copyTask.splice(idx, 1)

    settask(copyTask)
  }

  return (

    <div className='min-h-screen lg:flex bg-black text-white'>
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

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Note</h1>
        <div className='flex flex-wrap items-start justify-start gap-5  mt-6 h-full overflow-auto'> 

         {task.map(function(elem, idx){
          return <div key={idx} className=' flex justify-between flex-col relative h-52 w-40 rounded-xl px-4py-6 text-black bg-white'>
          
          <div>
              <h3 className='leading-tight text-xl font-black'>{elem.title}</h3>
            <p className=' leading-tight mt-2 font-medium text-gray-400'>{elem.details}</p>
            </div>.
              <button onClick= {()=> {
                deleteNote(idx)
              }} className='text-sm rounded cursor-pointer font-bold bg-red-500 w-full text-white py-1'>Delete</button>
          </div>
         })} 

        </div>
      </div>
    </div>
  )
}

export default App;
