import React from 'react';
const Artist = ({ artist }) => {
  const { name, id } = artist
  return (
    <>
      <h1>{name}</h1>
      <hr/>
      <a href={`/artists/${id}/songs`}>Songs</a>
    </>
  )
}
export default Artist;