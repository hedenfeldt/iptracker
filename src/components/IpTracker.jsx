import React, { useEffect, useState } from 'react'
import { getIpData } from '../../lib/functions';
import Arrow from "../assets/icon-arrow.svg";
import './Iptracker.css'

export default function IpTracker({ipData, setIpData}) {
    const [ipAddress, setIpAddress] = useState("")

    useEffect(() => {
      console.log(ipData)
    }, [ipData])
   
    
  return (
    <div className='iptracker'>
        <h3 className="title">Ip Adress Tracker</h3>
        <div className="input">
            <input 
            className='inputfield'
            type="text"
            placeholder='search for any IP Adress or domain' 
            onChange={(event)=>{
                setIpAddress(event.target.value)
            }}/>

            <div className="btn"
            onClick={async () => {
                let data = await getIpData(ipAddress)
                setIpData(data)
              }}>
                <img className="icon" src={Arrow} alt="" />
            </div>
        </div>
        <div className="info-wrapper">
        <div className="info">
          <h2>IP adress</h2>
          <p>{ipData?.query}</p>
        </div>
        <div className="divider"></div>
        <div className="info">
          <h2>Location</h2>
          <p>{ipData?.regionName}, {ipData?.countryCode} </p>
        </div>
        <div className="divider"></div>
        <div className="info">
          <h2>Timezone</h2>
          <p>{ipData?.timezone}</p>
        </div>
        <div className="divider"></div>
        <div className="info">
          <h2>ISP</h2>
          <p>{ipData?.isp}</p>
        </div>
      </div>
    </div>
  )
}


