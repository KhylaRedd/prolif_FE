import React, { useState, useEffect } from "react";
import Artist from "./Artist";
import './Artists.css';

const API = import.meta.env.VITE_BASE_URL;

function Artists() {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API}/artists`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(res => {
        if (!Array.isArray(res)) {
          throw new TypeError("Response is not an array");
        }
        setArtists(res);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch artists data");
      });
  }, [API]);

  return (
    <div className="arti-container">
      <div className="left"> <p className="sideText">PROLIFS and ICONS</p>
      </div>
     
      {error && <p>{error}</p>}
      {artists.length === 0 && !error && <p>No artists found</p>}
      <div className="grid">
      {artists.map((artist) => (
        <Artist key={artist.id} artist={artist} id={artist.id} />
      
      ))}
      </div>
    </div>
  );
}

export default Artists;
