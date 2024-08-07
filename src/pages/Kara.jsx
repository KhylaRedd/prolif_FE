import p1 from '../portraits/p1.jpg'
import p2 from '../portraits/p2.jpg'
import p3 from '../portraits/p3.webp'
import p4 from '../portraits/p4.jpg'
import p5 from '../portraits/p5.webp'
import p6 from '../portraits/p6.jpg'

import './Kara.css'
import React from 'react'

function Kara() {
  return (
 <div className='photoset'>

    <div className='ps'>

        <img className='ps1'src={p1} alt="Kara portrait" />

      </div>

      <div className='ps'>
        <img className='ps2' src={p2} alt="Second Kara portrait" />
      </div>

      <div className='ps'>
      <img className='ps3' src={p3} alt="" />
      </div>

      <div className='ps'>
        <img className='ps4' src={p4} alt="" />
      </div>

      <div className='ps'>
      <img className='ps5' src={p5} alt="BooHoo" />
      </div>

      <div className='ps'>
        <img className='ps6' src={p6} alt="" />
    
     </div>

    <div className='video'>
     <iframe width="800" height="600" src="https://www.youtube.com/embed/uEIBzOAkmVo?si=4SavCX6euTfQPjrU&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
     </iframe>
     
</div>
    </div>

    
  )
}

export default Kara
