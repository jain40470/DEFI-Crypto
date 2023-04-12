import React from 'react'

export default function Card(props) {

  return (

    <div className='flex flex-col border text-left text-white rounded-xl py-8 px-8'>

        <div>

               <div className='bg-[#1b8e98] inline-flex rounded-full p-3'>

                {props.icon}
    
               </div>
               
               <h1 className='text-xl font-bold text-[#1b8e98] py-2'>

                {props.title}

               </h1>

               <p>

                 {props.data}

               </p>

        </div>

    </div>

  )
}
