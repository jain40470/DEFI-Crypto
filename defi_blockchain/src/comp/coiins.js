import React , {useState,useEffect} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'

import Coin_card from './coin_card'

export default function Coiins() {

    const [data,setData] = useState(null)

    const listarr = [1,2,3,4];

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

  if(!data){

    return null

  }
  return (

    <div className='w-full bg-black text-white ' id='cryp'>

        <div className='max-w-[1200px] mx-auto grid grid-cols-2 px-5 py-20 items-center'>

            <div>
               <p className='font-bold text-4xl py-4'>
                Explore Top <span className="text-[#1b8e98]">Crypto's</span> Like
                <br />
                BitCoin , Ethereum and
                <br />
                Dogecoin
               </p>
               
               <Link to={`/cryp`}>
                    <button>
                       <span className='text-3xl'>  Wanna Track .....</span>
                   </button>
               </Link>

            </div>

            <div className='grid sm:grid-col-1 lg:grid-cols-3 gap-10 text-white'>

                {   
                    data.map(
                        (dat)=>{
                            return (
                                <Coin_card key={dat.id} data={dat}/>
                            )
                        }
                    )

                }

            </div>

        </div>

    </div>

  )
}
