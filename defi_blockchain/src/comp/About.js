import React from 'react'

import {SiHiveBlockchain,SiStrapi,SiFsecure} from 'react-icons/si';
import {VscServerProcess} from 'react-icons/vsc';

import Card from './card'

export default function About() {


  return (

    <div className='w-full  bg-black text-center text-white' id='serv'>

        <div className='max-w-[1240px] mx-auto py-16 px-4'>

            <h1  className='py-4 text-4xl'>
                A Growing Protocol System
            </h1>
            <p className='py-4 text-xl'>
                Our protocol system empowers,developers,liquidity providers,
                <br />
                traders to participate in a financial marketspace that
                <br />
                is open and  accesible to all.
            </p>

            <div className='grid sm:grid-col-1 lg:grid-cols-4 gap-10'>

               <Card icon={<SiHiveBlockchain size={40} />} title='Reliable, tamper-proof network' data='Use decentralization, trusted nodes, premium data, and
                    cryptographic proofs to connect highly accurate and available
                   data/APIs to any smart contract.' />

               <Card icon={<SiFsecure size={40} />} title='Seamless connection to any API' data='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
               <Card icon={<SiStrapi size={40} />} title='Proven, ready-made solutions' data='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
               <Card icon={<VscServerProcess size={40} />} title='Secure off-chain computation' data='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
               
            </div>

        </div>

    </div>

  )
}
