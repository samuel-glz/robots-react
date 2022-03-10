import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-blue-300 hover:bg-blue-400 rounded-md p-3 m-2 shadow-md inline-block active:scale-98">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" className="" />
      <div>
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <p className="text-center">{email}</p>
      </div>
    </div>
  )
}

export default Card;