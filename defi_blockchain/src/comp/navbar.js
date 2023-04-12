import React, { useState } from 'react'

import { Link } from 'react-scroll';

import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {

  const [Vis,setVis] = useState(false);

  function handlevis(){
    setVis(!Vis)
  }

  return (

       <div className='w-full h-[90px] bg-black'>
           <div className='max-w-[1240px] mx-auto px-4 py-5 flex justify-between'>

                  <div>

                    <h1 className='text-[#1b8e98] font-bold text-4xl'>GENESIS-BLOCK</h1>

                  </div>

                  <div className='hidden md:flex'>

                    <ul className='flex text-white items-center'>

                        <li><Link to="faqs" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                        <li><Link to="cryp" spy={true} smooth={true} offset={50} duration={500}>Crypto-Tracker</Link></li>
                        <li><Link to="serv" spy={true} smooth={true} offset={50} duration={500}>Services</Link></li>
                        <li><Link to="abt" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                        <button className='ml-5'>Hello</button>

                    </ul>

                  </div>

                  <div onClick={handlevis} className='block md:hidden'>

                    {!Vis ? <AiOutlineMenu size={30} className='text-white'/> : <AiOutlineClose size={30} className='text-white'/> }
                    
                  </div>

                  <div className={Vis ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center': 'absolute left-[-100%]'}>

                    <ul>
                        <li>Crypto-Tracker</li>
                        <li>Services</li>
                        <li>Faqs</li>
                        <li>About</li>
                        <button><p className='font-bold text-2pxl'>Hello</p></button>
                    </ul>

                  </div>

            
            </div>
       </div>

  )
}

// Structure 

//Coloured Box
// inside there is box which contains title,links
