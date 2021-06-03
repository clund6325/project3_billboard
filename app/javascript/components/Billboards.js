import React from 'react'
const Billboards = ({ Billboards }) => {
  return (
    <>
      <h1>Billboards</h1>
      <a href="/billboards/new">New Billboard</a>
      <br />
      <h2>{ Billboards.length <= 0 ? "No billboards" : ""}</h2>
      {
        billboards.map( (billboard) => (
          <div>
            <a href={`/billboards/${billboard.id}`}>{billboard.title}</a>
          </div>
        ))
      }
    </>
  )
}
export default Billboards;