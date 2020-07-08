import React from 'react'
import { cardProps } from '../shared/interfaces';

const Card = (props: cardProps) => {
  let cardClass = "card "
  if (props.rating > 8.5) {
    cardClass += "yellow"
  }
  return (
    <a className="card-link" href={"/details/" + props.id}>
      <div className={cardClass}>
        <div className="card-image">
          <img src={props.image} alt="Show" />
          <button className="btn-floating halfway-fab waves-effect waves-light blue">
            <i style={{ fontSize: "16px" }}>
              {props.rating}
            </i>
          </button>
        </div>
        <div className="card-content">
          <p>{props.name}</p>
        </div>
      </div>
    </a>
  );
}

export default Card