import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

export default function Coin_det1() {

  const [coin,setCoin] = useState({});
  const params = useParams()
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinID}`;

  useEffect(()=>{
    axios.get(url).then(
      (respons)=>{
        setCoin(respons.data);
      }
    ).catch(
      (error)=>{
        console.log(error); 
      }
    )},
    []
  )

  return (
    <div className='text-white flex flex-col  mx-auto'>

                <h1 className='py-6'>hii</h1>
                {coin.image ? <img src={coin.image.small} alt='' className='w-[65px] h-[65px]' /> : null}


    </div>
  )
}
