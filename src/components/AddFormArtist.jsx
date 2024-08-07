import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './AddFormArtist.css'

const API = import.meta.env.VITE_BASE_URL;

function AddFormArtist() {
  const navigate = useNavigate();
  const [artist, setArtist] = useState({
    artistname: "",
    date_of_birth: "",
    starsign: "",
    ethnic_origin: "",
    art_sector: "",
    save_for_inspo: false,
  });

  const handleTextChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value });
  };

  const handleBoxChange = () => {
    setArtist({ ...artist, save_for_inspo: !artist.save_for_inspo });
  };

  const addNewArtist = () => {
    fetch(`${API}/artists`, {
      method: "POST",
      body: JSON.stringify(artist),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((newArtist) => {
        navigate(`/artists/${newArtist.id}`);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewArtist();
  };

  return (
    <form className="artistform" onSubmit={handleSubmit}>
      <div className="formbox">
        <label htmlFor="artistname"> Name: </label>
        <input className="g"
          type="text"
          name="artistname"
          value={artist.artistname}
          onChange={handleTextChange}
        />
      </div>

      <div className="formbox">
        <label htmlFor="date_of_birth">D.O.B: </label>
        <input className="g"
          type="date"
          name="date_of_birth"
          value={artist.date_of_birth}
          onChange={handleTextChange}
        />
      </div>

      <div className="formbox">
        <label htmlFor="starsign">Sign: </label>
        <input className="g"
          type="text"
          name="starsign"
          value={artist.starsign}
          onChange={handleTextChange}
        />
      </div>

      <div className="formbox">
        <label htmlFor="ethnic_origin">Origin: </label>
        <input className="g"
          type="text"
          name="ethnic_origin"
          value={artist.ethnic_origin}
          onChange={handleTextChange}
        />
      </div>

      <div className="formbox">
        <label htmlFor="art_sector">Sector: </label>
        <input className="g"
          type="text"
          name="art_sector"
          value={artist.art_sector}
          onChange={handleTextChange}
        />
      </div>

      <div className="formbox">
        <label id="checkbox" htmlFor="save_for_inspo">Inspired? </label>
        <input
          type="checkbox"
          name="save_for_inspo"
          checked={artist.save_for_inspo}
          onChange={handleBoxChange}
        />
      </div>

      <button className="b" type="submit">Add Artist</button>

      <Link to={`/artists`}>
        <button className="b">Back</button>
      </Link>
    </form>
  );
}

export default AddFormArtist;
