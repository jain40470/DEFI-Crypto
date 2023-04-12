import React from 'react'

export default function Coincard(props) {

    function price_change(val){

    if(val<0){
        return(
            <h1 className='text-[red]'>-${-val.toFixed(2)}</h1>
        )
    }
    return(
        <h1 className='text-[green]'>${val.toFixed(2)}</h1>
    )

  }

  return (
                
        <div className='my-4 grid sm:grid-cols-6 lg:grid-cols-6 gap-10 text-center'>
              <div><h1>{props.coins.market_cap_rank}</h1></div>

              <div  className=' mx-auto justify-center'>
                <img className="w-[65px] h-[65px]" src={props.coins.image} alt={props.coins.symbol} />
                <h1>{props.coins.symbol.toUpperCase()}</h1>
              </div>
              
              <div><h1>${props.coins.current_price}</h1></div>

              <div>
                 {
                   price_change(props.coins.price_change_percentage_24h)
                 }
              </div>
                    
              <div>{props.coins.total_volume}</div>
                    
              <div>{props.coins.market_cap}</div>

        </div>
                
  )
}
