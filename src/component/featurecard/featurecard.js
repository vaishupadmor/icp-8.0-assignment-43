import React from 'react'
import "./featurecard.css"


function FeatureCard({featureImg, featureText}) {
  return (
    <div className='feature-cardd'>
        <img src={featureImg} className='feature-imgg ' alt='love'/>
        <p className='feature-textt'>
         {featureText}
        </p>
    </div>
  )
}

export default FeatureCard