import React from 'react';
const ArtistNew = ({ artist }) => {
  const { id } = billboard
  const { name, errors } = artist
  const defaultName = name ? name : ""
  return(
    <>
      <h1>Add Artist</h1>
      { errors && errors }
      <form action={`/billboards/${id}/artists`} method="post">
        <input
          type='text'
          required
          placeholder="Name"
          defaultValue={defaultName}
          name="artist[name]"
        />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}
export default ArtistNew;