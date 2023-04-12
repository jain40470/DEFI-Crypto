import React from 'react'
import Coincard from './coin_card.js'
import {Link} from 'react-router-dom'
import Coindetail from './coindetail'

export default function Cointabl(props) {

  return (
    
    <div className='bg-black w-full h-full mx-auto'>
        <div className='max-w-[1240px] bg-black mx-auto'>
            <div className='grid grid-cols-1 text-white justify-center text-center py-20'>
                
                <div className=' my-10 mx-auto py-3'>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='px-10 text-black'><input type="text" /></div>
                            <div className='px-10 text-black'><button>Search</button></div>
                        </div>
                </div>
                <div className='my-4 grid sm:grid-cols-6 lg:grid-cols-6 gap-10 text-center'>

                    <div><h1>#</h1></div>
                    <div><h1>Coin</h1></div>
                    <div><h1>Price</h1></div>
                    <div><h1>24h</h1></div>
                    <div><h1>Volume</h1></div>
                    <div><h1>Mkt-cap</h1></div>

                </div>

                {
                    props.coins.map(
                        (coinsss)=>{
                            return(
                                <Link to={`/cryp/detail/${coinsss.id}`} element={<Coindetail/>} key={coinsss.Id}>
                                     <Coincard coins={coinsss}/>
                                </Link>
                            )
                        }
                    )
                }

            </div>

        </div>
        
    </div>


  )


}
