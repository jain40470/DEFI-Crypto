import React from 'react'

import Cry from './search_nav';
import {Link} from 'react-router-dom'

import Coin_det1 from './coin_det1';
import Coin_chart from './coin_chart';

export default function Coindetail() {

  return (
     <div className='w-full bg-black'>

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

           <div className='max-w-[1240px] h-[90vh] py-20 text-white text-center bg-black mx-auto  grid grid-cols-2 gap-10'>

            <Coin_det1/>
            {/* <Coin_chart/> */}

           </div>

     </div>
  )
}
