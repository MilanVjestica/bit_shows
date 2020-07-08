import showCard from '../models/showCard'
import { SHOWS_URL, SHOW_URL } from '../shared/constants'
import showDetails from '../models/showDetails'
import actor from '../models/actor'

class ShowsService {
  getShows() {
    return fetch(SHOWS_URL)
      .then(response => {
        return response.json()
      })
      .then(shows => {
        const showsList = shows.slice(0, 50).map((show: any) => {
          return new showCard(show);
        })
        return showsList
      })
  }

  getShow(id: number) {
    return fetch(SHOW_URL + id)
      .then(response => {
        return response.json()
      })
      .then(show => {
        return new showDetails(show)
      })
  }

  getCast(id: number) {
    return fetch(SHOW_URL + id + "/cast")
      .then(response => {
        return response.json()
      })
      .then(cast => {
        const castList = cast.map((act: any) => {
          return new actor(act.person)
        })
        return castList
      })
  }
}

export const showsService = new ShowsService()