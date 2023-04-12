import React from 'react'
import Cry from './comp2/search_nav'

import { useState,useEffect } from 'react'
import axios from 'axios'
import Cointabl from './comp2/Cointabl'


export default function App2() {

  const [coins,setCoins] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

  useEffect( ()=>{

    axios.get(url).then(

      (response)=>{

        setCoins(response.data)
        console.log(response.data[0])

      }

    ).catch(
      (error)=>{
        console.log(error)
      }
    )

  },[])

  return (

    <div className='bg-black w-full h-full'>
      
      <Cry/>

      <Cointabl coins={coins}/>

    </div>
  )

}


      // <Link to={`/cryp/coin`}>
      //   <button>hELLO</button>
      // </Link>

      // <Link to={`/cryp/coin`}>
      //   <button>Hiiii</button>
      // </Link>
