import React from 'react'
import { Link } from 'react-router-dom';


function Artist({artist, id}) {
  return (
    <div>
      <div className="artiCard">
        <div className="artDetails">
          <Link to={`/artists/${id}`}>
          <h3 className='names'>{artist.artistname}</h3>
          </Link>
          <p className='artbase'>{artist.art_sector}</p>
        </div>
      </div>
    </div>
  )
};

export default Artist;
