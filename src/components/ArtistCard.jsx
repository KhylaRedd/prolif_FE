import React, { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { LiaPaletteSolid } from "react-icons/lia";
import { LiaStar } from "react-icons/lia";


const API = import.meta.env.VITE_BASE_URL;


function ArtistCard() {

  let { id } = useParams();
  let navigate = useNavigate();
  const [details, setDetails] = useState({
    artistname: "",
    date_of_birth: "",
    starsign: "",
    ethnic_origin: "",
    art_sector: "",
    save_for_inspo: "",

    })

  useEffect(()=>{
    fetch(`${API}/artists/${id}`)
    .then (res => res.json())
    .then (res =>{
        if(!res.artistname){ 
            navigate("/404");
      
          }
            setDetails(res)
    })
    .catch(err => console.log(err))
  }, [])
  
  const handleDelete = () => {
    if(window.confirm("Are you sure wish to free this Artist?"))
    fetch(`${API}/artists/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(res => navigate('/artists'))
      .catch(err => console.log(err))
  }
  return (
    <section className="ArtistCard">
     <h2 className='st'>Prolific Details</h2>
      <p>
      <span> NAME: </span> {details.artistname}
      </p>
      <p>
      <span>
      D.O.B:</span> {details.date_of_birth}
      </p>
      <p><span>
      SIGN:</span> {details.starsign}
      </p>
      <p><span>
      ORIGIN:</span> {details.ethnic_origin}
      </p>
      <p>
      <span>ART SECTOR: </span> {details.art_sector}
      </p>
      <p>
      
       {/* allows for a binary icon */}
       {details.save_for_inspo ? (
        <LiaPaletteSolid className="liked-icon" title="Liked for Inspiration" />
      ) : (
        <LiaStar className="not-liked-icon" title="Not Liked for Inspiration" />
      )}

    </p>
            <div className="bottom-buttons">
                <Link  to={`/artists`}>
                        <button className="b">Icons</button>
                 </Link>

                <button className="b" onClick={handleDelete}>Delete</button>

                <Link  to={`/artists/${id}/edit`}>
                    <button className="b">Edit</button>
                </Link>
            </div>


      
    </section>
  )
}

export default ArtistCard
