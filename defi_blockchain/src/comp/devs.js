import React from 'react'

import terminal from '../assets/iim.png'

export default function Devs() {

  return (
     
    <div className='w-full bg-black text-white' id='abt'>

        <div className="max-w-[1200px] mx-auto px-4 py-16 md:flex">

            <div>
                   <h1 className='font-bold text-5xl px-15 py-4'>
                    Supercharged For <span className='text-[#1b8e98]'>BlockChain</span>ers
                   </h1>
                   <p className='text-xl'>
                    Checkout the <span className="text-[#1b8e98]"><a href="https://ethereum.org/en/developers/docs/">Documentation</a></span>, the <span className="text-[#1b8e98]"><a href="https://ethereum.org/en/developers/local-environment/">quick start</a></span>  or a guide below to
                    integrate your project with thousands of tokens and billions of
                    liquidity.
                   </p>
            </div>
            <div className='flex justify-center py-5'>
                <img src={terminal} alt="" />
            </div>

        </div>
        
    </div>

  )
}
