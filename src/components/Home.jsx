import {React, useState } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'




const Home = () => {

  return (
 
    <div name='home' className='w-full h-screen'>
   

    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    
    
        <p className='text-pink-600 font-bold'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold'>Edmond Fagbuyi</h1>
        <h2 className='text-4xl sm:text-7xl font-bold'>I'm a Software Engineer</h2>
        <p className='py-4 max-w-[700px]'>A highly skilled and dedicated Cloud and Web Developer with almost 3 years of experience in developing
scalable and robust web applications. Seeking a challenging position to utilize my expertise in front
end and back end development, database manage ment, and problem solving to contribute to the
success of a dynamic organization. Highly motivated to learn new conc ept and technologies.</p>
<button className= 'max-w-[170px] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
        View Work
        <span className='group-hover:rotate-90  duration-300'><HiArrowNarrowRight className='ml-3'/></span>
    </button>
    </div>
  
</div>

  )
}

export default Home
