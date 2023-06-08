import React from 'react'
import Button from '../Button/Button'
const Secondsection = () => {
  return (
    <div className='main'>
      <div className='container1' style={{ 
      backgroundImage: `url("/images/banner.jpeg")`
    }}>
      <h1 className='text'>Bharat Vidya</h1>
      <h2 className='text-1'>A Rediscovery of Ancient India</h2>
      <div>
      <Button myClass="second-sec-button">Explore andncient india</Button>

      </div>
    </div>
    </div>
  )
}

export default Secondsection
