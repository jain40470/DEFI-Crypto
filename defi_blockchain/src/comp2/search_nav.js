import React from 'react'

import { Link } from 'react-router-dom';

export default function Cry() {

  return (
       <div className='w-full h-[5px] bg-black'>
           <div className='max-w-[1240px] bg-black mx-auto px-4 py-5 flex justify-between'>
                  <div>
                    <h1 className='text-[#1b8e98] font-bold text-4xl'>GENESIS-BLOCK</h1>
                  </div>
                  <div>
                      <Link to={`/cryp/home`}>
                             <button>Back To Home</button>
                      </Link>
                  </div>
            </div>
       </div>
  )
}
