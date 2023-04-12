import { useParams } from "react-router-dom";
import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const Coinsssoin_chart = () => {

  const params = useParams();

  const [response,setResponse] = useState({});

  const url = `coins/${params.coinID}/market_chart?vs_currency=usd&days=7`;

  useEffect(()=>{
    axios.get(url).then(
      (respons)=>{
        setResponse(respons.data);
      }
    ).catch(
      (error)=>{
        console.log(error); 
      }
    )},
    []
  )

  
  if(!response) {
    return (
      <div className="wrapper-container mt-8">
        <h1>hii</h1>
      </div>
    )
  }

  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
  const options = {
    responsive: true
  }
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: params.coinID,
        data: coinChartData.map(val => val.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }

  return (
    <div>

      <Line options={options} data={data} />
      
       <h1>hiii</h1>

    </div>
  )
}

export default Coinsssoin_chart

