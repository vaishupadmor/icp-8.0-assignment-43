import React from 'react'
import Imgsecure from "./cyber-security.png"
import Imgbrain from "./brain.png"
import Imgeasy from "./easy.png"
import Imglove from "./love.png"
import FeatureCard from './../../component/featurecard/featurecard'
import "./home.css"
import { Link } from 'react-router-dom'

const FEATURES = [
{
featureImg:Imgsecure,
featureText:"Notes will be saved securly in your browser's local storage",
},
{
featureImg:Imgbrain,
featureText:"Use your brain for Thinking.Not for remembering things.",
},
{
featureImg:Imglove,
featureText:"Use your heart for trust",
},
{
featureImg:Imgeasy,
featureText:"easy to use ade understand.",
}]




function Home() {
  return (
    <div>
        <h1 className='text-center text-primary  app-title'> 📓{" "} Quick Note </h1>
        <p className='text-center text-secondary'> Your pocket friendly note taking app .{" "}
            <del> Never forget anything again!</del>  {" "}  <span className='highlight text-black tagline-highlight'> Remember everything .</span>
        </p>
    

    <div >
      <h3 className='text-center'>  Why you should use quick note ?</h3>
     <div className='feature-container'>
      {   FEATURES.map((feature)  => {
              const {featureImg,featureText} = feature;
              
              return (
                < FeatureCard 
                featureImg={featureImg}
                featureText={featureText}
                 />
              );

            })
       }
          
   </div>    
</div>

    <div className='buttons-container'>
      <Link to="/add"> 
       <button className=' btn btn-primary'>
       🖊️ Add Note
        </button>
        </Link>
        <Link to="/show">
        <button className=' btn btn-secondary'>
        📝 Show Notes
          </button> 
          </Link>
    </div>
    </div>
  )
}

export default Home