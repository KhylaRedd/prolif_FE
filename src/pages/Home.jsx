import React from 'react'
import './Home.css'
import postIt from '../assets/postit.png'
import background from '../assets/background.jpg'
function Home() {
  return (
    <div className='homepage'>
      <img className="postIt" src={postIt} alt="post it note" />
      <img className="background" src={background}/>

    </div>
  )
}

export default Home
