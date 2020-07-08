import React, { useEffect, useState } from 'react'
import { showsService } from '../services/showsService'
import Loading from './Loading'
import { Row, Col, TextInput, Icon } from 'react-materialize'
import showCard from '../models/showCard'
import Card from './Card'

const LandingPage = () => {
  const [ loading, setLoading ] = useState(true)
  const [ shows, setShows ] = useState<undefined | Array<showCard>>(undefined)
  const [ filteredShows, setFilteredShows ] = useState<undefined | Array<showCard>>([])

  useEffect(() => {
    if (loading) {
      showsService.getShows()
      .then(shows => {
        setShows(shows)
        setFilteredShows(shows)
        setLoading(false)
      })
    }
  })

  const filterShows = (e: any) => {
    let filtered: undefined | Array<showCard> = shows?.filter((s: showCard) => s.name.toLowerCase().includes(e.target.value)).map((show: showCard) => {
      return show
    })
    setFilteredShows(filtered)
  }

  return (
    <div>
      {loading && (<Loading />)}
      {shows && (
        <Row>
          <TextInput onChange={filterShows} placeholder="First Name" icon="search" s={12} />
          {filteredShows && filteredShows.map((show: showCard) => (
            <Col m={3} s={1} >
              <Card id={show.id} image={show.images.medium} name={show.name} rating={show.rating.average} />
            </Col>
          ))}
          {filteredShows && filteredShows.length === 0 && (
            <div className="center">
              <Icon medium>sentiment_neutral</Icon>
              <h3>
                We couldn't find any <br /> shows matching your <br /> search
              </h3>
            </div>
          )}
        </Row>
      )}
    </div>
  )
}

export default LandingPage