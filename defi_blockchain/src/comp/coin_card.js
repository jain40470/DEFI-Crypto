import React from 'react'
import {SiHiveBlockchain,SiStrapi,SiFsecure} from 'react-icons/si';

export default function Coin_card(props) {

  function price_change(val){

    if(val<0){
        return(
            <h2 className='text-[red]'>-${-val.toFixed(2)}</h2>
        )
    }
    return(
        <h2 className='text-[green]'>${val.toFixed(2)}</h2>
    )

  }

  return (

    <div className=' w-[170px]  bg-gradient-to-r from-[#4DCCC6] to-[#1b8e98] rounded-2xl text-white px-1 py-4 text-center grid grid-row-2 '>

        <div className='justify-center py-5 mx-auto'>
            <img src={props.data.image} className='w-[65px] h-[65px]'/>
        </div>

        <div className='py-1 justify-center'>
            <h1> {props.data.name} </h1>
            <h2> ${props.data.current_price}</h2>
            {
              price_change(props.data.price_change_24h)
            }
        </div>


    </div>


  )


}
