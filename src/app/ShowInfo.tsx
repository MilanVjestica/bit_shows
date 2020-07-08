import React from 'react'
import { Row, Col, Chip, Icon } from 'react-materialize';
import { showProps } from '../shared/interfaces';

const ShowInfo = (props: showProps) => {
  return (
    <Row>
      <Col s={6}>
        <img
          alt="Show"
          src={props.show.images.original}
          width="500"
          style={{marginTop: "30px"}}
        />
      </Col>
      <Col s={6}>
        <h2>
          {props.show.name}
        </h2>
        <div>
          {props.show.genres.map(genre => (
            <Chip
              close={false}
              closeIcon={<Icon className="close">close</Icon>}
            >
              {genre}
            </Chip>
          ))}
        </div>
        <h5>
          <div dangerouslySetInnerHTML={{ __html: props.show.summary }}></div>
        </h5>
      </Col>
    </Row>
  );
}

export default ShowInfo