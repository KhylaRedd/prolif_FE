import React from 'react';
import Artists from '../components/Artists';
import '../pages/Index.css'
import background from '../assets/background.jpg'

function Index() {

    return (
      <div className='artist-layout'>
        
        <Artists/>
        <img className="background" src={background}/>
      </div>
    )
  }
  
  export default Index