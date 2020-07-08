import React, { useState } from 'react'
import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize'
import ActorCard from './ActorCard'
import actor from '../models/actor'
import { castProps } from '../shared/interfaces'

const Cast = (props: castProps) => {
  const [view, setView] = useState<"list" | "grid">("grid")
  
  if (view === "grid") {
    return (
      <>
      <Row>
        <h4>CAST</h4>
        <div className="noselect view-changer" onClick={() => setView("list")}>
          <Icon small>view_list</Icon>
        </div>  
      </Row>
      <Row>
        {props.cast.map((c: actor) => {
          return (
            <Col s={2}>
              <ActorCard name={c.name} image={c.images.medium} />
            </Col>
          )
        })}
      </Row>
      </>
    );
  }
  return (
    <>
    <Row>
      <h4>CAST</h4>
      <div className="noselect view-changer" onClick={() => setView("grid")}>
        <Icon small>view_module</Icon>
      </div>
    </Row>
    <Row>
      {props.cast.map((c: actor) => {
        return (
          <Col m={12}>
            <Collection>
              <CollectionItem href="#" className="avatar collectionItemCustom">
                <img
                  alt=""
                  className="circle"
                  src={c.images.medium}
                />
                <span className="title black-text">
                  {c.name}
                </span>
              </CollectionItem>
            </Collection>
          </Col>
        );
      })}
    </Row>
    </>
  );
}

export default Cast