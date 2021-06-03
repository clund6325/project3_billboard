import React from 'react';

const Artists = ({artists}) => {
  return(
    <>
      <h1>Artists</h1>
      <a href="/artists/new">New Artist</a>
      <br />
      <h2>{ artists.lenght <= 0 ? "No Artists" : "" }</h2>
      {
        artists.map( ( artist) => (
          <div>
            <a href={`/artists/${artist.id}`}>{artist.name}</a>
          </div>
        ))
      }
    </>
  )
}

export default Artists