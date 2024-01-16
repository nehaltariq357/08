import React from 'react'

function Card(props) {
  return (
<div className="card w-44">
  <img className='' src={props.img} class="card-img-top" alt="..."/>
  <div className="">
    <p className="w-44 ml-2 capitalize">{props.description}</p>
    <p className="w-44 ml-2 capitalize">{props.price}</p>
  </div>
</div>
  )
}

export default Card