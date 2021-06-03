import React from 'react';
const BillboardNew = ({ billboard }) => {
  const { title, body, errors } = billboard;
  const defaultTitle = title ? title : "";
  const defaultBody = body ? body : "";
  return (
    <>
      <h1>New Billboard</h1>
      { errors && errors }
      <form action="/billboards" method="post">
        <input
          required
          placeholder="Title"
          type="text"
          defaultValue={defaultTitle}
          name="billboard[title]"
        />
        <textarea
          required
          placeholder="Description"
          defaultValue={defaultBody}
          name="billboard[body]"
        />
        <button type="submit">Add Billboard</button>
      </form>
    </>
  )
}
export default BillboardNew;