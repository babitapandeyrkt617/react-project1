import React from 'react'
import CourseData from '../CourseData'
import Card from '../Card/Card';

const Course = () => {
  return (
    <div>
    <button className='btn1'>Category:</button>
    <button className='btn1'>Author:</button>
    <input className='filds' type='text' placeholder='Find a course'/> 
    <h2 className='text10'>Digital Downloads</h2>
    <h2 className='text10'>Courses</h2>
<div className='container3'>

   { CourseData.map((val)=>{
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
    </div>
  )
}

export default Course;

