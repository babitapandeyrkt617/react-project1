import React from 'react'
import Card from '../Card/Card';
import Data from '../Data';
import Button from '../Button/Button';

const Sevrnsection = () => {
  return (
    <div className='main-div'>
        
        <h1 className='text8'>Epics, Darshana-s and Sanskrit Literature</h1>

    <div className='container'>
   { Data.map((val)=>{
    return(
      <Card 
      imgSrc={val.imgSrc}
  title1={val.title1}
  title2={val.title2}
  imgSrc1={val.imgSrc1}
  para={val.para}
  para1={val.para1}
  />
    )
   })}

    </div>
    <div style={{marginTop:"20px"}}>
    <Button>demo</Button>

    </div>
   
    </div>
  )
}

export default Sevrnsection;