import React, { useEffect, useState } from 'react'
import { showsService } from '../services/showsService';
import Loading from './Loading';
import showDetails from '../models/showDetails';
import actor from '../models/actor';
import Cast from './Cast';
import ShowInfo from './ShowInfo';

const Details = (props: any) => {
  const [ loading, setLoading ] = useState(true)
  const [ show, setShow ] = useState<undefined | showDetails>(undefined)
  const [ cast, setCast ] = useState<undefined | Array<actor>>(undefined)

  useEffect(() => {
    if (loading === true) {
      showsService.getShow(props.match.params.id)
        .then(retShow => {
          showsService.getCast(props.match.params.id)
          .then(retCast => {
              setLoading(false)
              setShow(retShow)
              setCast(retCast)
            })
        })
    }
  })

  return (
    <div style={{marginTop: "30px"}}>
      {loading && (<Loading />)}
      {show && (
        <>
          <ShowInfo show={show} />
        </>
      )}
      {cast && (
        <>
          <Cast cast={cast} />
        </>
      )}
    </div>
  );
}

export default Details