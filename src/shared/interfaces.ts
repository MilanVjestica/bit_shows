import actor from "../models/actor"
import showDetails from "../models/showDetails"

export interface showCardConstructor {
  id: string
  name: string
  rating: {
    average: number
  }
  image: {
    original: string
    medium: string
  }
}

export interface detailsCardConstructor {
  name: string
  genres: Array<string>
  image: {
    medium: string
    original: string
  }
  summary: string
  cast: Array<actor>
}

export interface actorConstructor {
  name: string
  image: {
    medium: string
    original: string
  }
}

export interface cardProps {
  id: string
  image: string
  name: string
  rating: number
}

export interface actorCardProps {
  name: string
  image: string
}

export interface castProps {
  cast: Array<actor>
}

export interface showProps {
  show: showDetails
}