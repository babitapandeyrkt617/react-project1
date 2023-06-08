import React from 'react'


const Card = (props) => {
  return (
      <div className='card'>
       <img className='pic1' src={props.imgSrc}/>
       <h3 className='text5'>{props.title}</h3>
       <h4 className='text1'>{props.title1}</h4>
       <div className='section'>
       <img src={props.imgSrc1}/>
       <p className='text3'>{props.para}</p>
       <p className='text4'>{props.para1}</p>
       </div>
      </div>
    
  )
}

export default Card;
{/* <div className='card'>
       <img className='pic1' src='./images/pic1.jpg'/>
       <h3 className='text5'>Veda Vidya - Vedas to Vedaangas</h3>
       <h4 className='text1'>An Introduction to the Vedic Literature</h4>
       <div className='section'>
       <img src='./images/pic2.png'/>
       <p className='text3'>Bhandarkar Oriental Research Institute</p>
       <p className='text4'>₹2,000</p>
       </div>
      </div> */}
