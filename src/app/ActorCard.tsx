import React from 'react'
import { actorCardProps } from '../shared/interfaces'

const ActorCard = (props: actorCardProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} alt="Actor" />
        <span className="card-title">{props.name}</span>
      </div>
    </div>
  );
}

export default ActorCard