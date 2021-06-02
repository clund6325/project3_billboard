import React from 'react';

const Billboard = ( {billboard} ) => {
  const { id, title, created_at } = billboard;
  return (
    <>
    <h1>Billboard {title}</h1>
    <p> Created: {created_at}</p>
    <p>ID of this Billboard is {id}</p>
    <a href="/">Back</a>
    <br />
    <a href={'/billboards/' + id } data-method="delete">Delete Billboard</a>
    <br />
    <a href={'/billboards/' + id + '/edit'}>Edit Billboard</a>
    <br />
    <a href={`/billboards/${id}/artists`}>Show Artists</a>
    </>
  )
}

export default Billboard;