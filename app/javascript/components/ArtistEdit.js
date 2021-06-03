import React from "react";

const ArtistEdit = ({ artist }) => {

  const { name, id } = artist
  const defaultName = name ? name : "";
  return (
    <>
      <h1>Editing {name}</h1>
      <form action={`/artists/${id}`} method="post">
        <input type='hidden' name="_method" value="patch" />
        <input
          placeholder="Name"
          type="text"
          required
          defaultValue={defaultName}
          name="[name]"
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default ArtistEdit;