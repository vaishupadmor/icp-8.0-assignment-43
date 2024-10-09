import React, { useEffect, useState } from 'react'
import Homebutton from '../../component/homebutton/homebutton'
import Notecard from '../../component/Notecard/Notecard';
import './show.css'

function Show() {
  const [notes,setNotes]= useState([]);

  useEffect(()=>{
    const savedNotes =JSON.parse(localStorage.getItem("notes")) || 
    [];
    setNotes(savedNotes);
  },[])
  
  return (
    <div>
      <h1 style={{textAlign:"center" , color:"#10375C"}}> 📝 Show Notes </h1>
      <div className='notes-container'>
      {
        notes.map((note,index)=>{
          const {title, description,category,emoji} = note;
          return(
            <Notecard index= {index} title={title}  description={description}  category={category} emoji={emoji}/>
          )

        })
      }
 </div>
      <Homebutton/> 
    </div>
  )
}

export default Show