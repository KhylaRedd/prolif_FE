import React, { useState } from 'react';
import '../components/ArtistCard';
import ArtistCard from '../components/ArtistCard';
import './Show.css'

function Show() {
  return (
    <div className='showArtist'>
    
       <div className='artsquare'>
        <img className= 'headshot' src="" alt="" />
        
      </div>
        
        <ArtistCard />
    </div>
  )
}

export default Show;

