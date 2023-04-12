import React from 'react'

import {Routes,Route} from 'react-router-dom'
import App from './App.js'
import App2 from './App2.js'
import Coindetail from './comp2/coindetail.js'
import Coincard from './comp2/coin_card.js'

export default function Mainapp() {

  return (

    <div>

        <Routes>

            <Route path='/' element={<App/>}/>

            <Route path='/cryp/home' element={<App/>}/>

            <Route path='/cryp' element={<App2/>}/>
              
            <Route path='/cryp/detail' element={<Coindetail/>}>
                  <Route path=':coinID' element={<Coindetail/>}/>
            </Route>

        </Routes>


    </div>
  )

}
                {/* <Route path='/cryp/coin' element={<Coincards/>}>
                    <Route path=':coinId' element={<Cointable/>}>
                </Route>  */}