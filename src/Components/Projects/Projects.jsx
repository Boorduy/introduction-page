import React from 'react'

function Projects() {
  return (
    <div className='py-16 bg-gray-600 bg-opacity-50'>
    <div className='py-32 bg-white bg-opacity-40 my-auto'>
      
    <div className='container m-auto px-6 text-gray-600 md:px-12 mb-10 mt xl:px-6'>
    <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
      
      {/* Left Section Image */}
      <div className='md:w-11/12 lg:w-5/12'>
        <img className='w-12/12 h-40 mb-14 mr-20'  src="./src/assets/stopWatch.png" alt="image" />
        
        <div className='md:w-6/12 lg:w-6/12'>
        </div>
      </div>
      
      {/* Right Section Description */}
      <div className='md:w-11/12 lg:w-full ml-20'>
        
        <div className='mt-60 md:w-11/12 lg:w-11/12'>
          <h2 className='-mt-72 text-red-300 opacity-85 font-bold md:text-4xl lg:text-5xl '>
            1.stopWatch
          </h2>
          <p className="mt-6 text-black w-auto min-w-96 font-bold">
            A stopWatch react project to learn about useRef and useState
          </p>
          <p className="mt-4 text-black font-light">
            Grade: 02/10
          </p>
        </div>
      </div>
      
    </div>
    
  </div>
            <div className='bg-black bg-opacity-5 my-10 py-4'>
            </div>
  <div className='container m-auto px-6 text-gray-600 md:px-12 mb-10 xl:px-6'>
    <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
      {/* 2nd projecct */}

      {/* Left Section Image */}
      <div className='md:w-11/12 lg:w-5/12'>
        <img className='w-12/12 h-40 mb-14 mr-20'  src="./src/assets/digitalClock.png" alt="image" />
        
        <div className='md:w-6/12 lg:w-6/12'>
        </div>
      </div>
      
      {/* Right Section Description */}
      <div className='md:w-11/12 lg:w-full ml-20'>
        
        <div className='mt-60 md:w-11/12 lg:w-11/12'>
          <h2 className='-mt-72 text-red-600 opacity-85 font-bold md:text-4xl lg:text-5xl '>
            2.Digital Clock
          </h2>
          <p className="mt-6 text-black w-auto min-w-96 font-bold">
            Clock Project that helped me better background design and working with date and time.
          </p>
          <p className="mt-4 text-black font-light">
            Grade: 02/10
          </p>
        </div>
      </div>
      
    </div>
    
  </div>
  <div className='bg-black bg-opacity-5 my-10 py-4'>
  </div>
  <div className='container m-auto px-6 text-gray-600 md:px-12 mb-10 xl:px-6'>
    <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
      {/* 3rd projecct */}

      {/* Left Section Image */}
      <div className='md:w-11/12 lg:w-5/12'>
        <img className='w-12/12 h-40 mb-14 mr-20'  src="./src/assets/password-Generator.png" alt="image" />
        
        <div className='md:w-6/12 lg:w-6/12'>
        </div>
      </div>
      
      {/* Right Section Description */}
      <div className='md:w-11/12 lg:w-full ml-20'>
        
        <div className='mt-60 md:w-11/12 lg:w-11/12'>
          <h2 className='-mt-72 text-green-500 opacity-100 font-bold md:text-4xl lg:text-5xl '>
          3.password-Generator
          </h2>
          <p className="mt-6 text-black w-auto min-w-96 font-bold">
            A Generator that uses useEffect to check dependencies to generate new password and  in General those dependecies have useRef whether they're true or false that can indicate removing the options of generated password and copy to clipboard.
          </p>
          <p className="mt-4 text-black font-light">
            Grade: 03/10
          </p>
        </div>
      </div>
      
    </div>
    
  </div>
  <div className='bg-black bg-opacity-5 my-10 py-4'>
  </div>
  <div className='container m-auto px-6 text-gray-600 md:px-12 mb-10 xl:px-6'>
    <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
      {/* 4th projecct */}

      {/* Left Section Image */}
      <div className='md:w-11/12 lg:w-5/12'>
        <img className='w-12/12 h-40 mb-14 mr-20'  src="./src/assets/currencyCalc.png" alt="image" />
        
        <div className='md:w-6/12 lg:w-6/12'>
        </div>
      </div>
      
      {/* Right Section Description */}
      <div className='md:w-11/12 lg:w-full ml-20'>
        
        <div className='mt-60 md:w-11/12 lg:w-11/12'>
          <h2 className='-mt-72 text-blue-500 opacity-85 font-bold md:text-4xl lg:text-5xl '>
            4.Currency-Calculator
          </h2>
          <p className="mt-6 text-black w-auto min-w-96 font-bold">
            uses jsdelivry from a json data to pull arrays of data to give options of currencies available and uses their value to calculate them and can switch their places to see calculate what to what. my issue was I could'nt find a way to change their values with each other I'll look into it again later.
          </p>
          <p className="mt-4 text-black font-light">
            Grade: 04/10
          </p>
        </div>
      </div>
      
    </div>
    
  </div>
  <div className='bg-black bg-opacity-5 my-10 py-4'>
  </div>
</div>
</div>
  )
}

export default Projects