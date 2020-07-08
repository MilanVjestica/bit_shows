import { showCardConstructor } from '../shared/interfaces'

export default class showCard {
  id: string
  name: string
  rating: { average: number }
  images: { original: string, medium: string }
  constructor({ id, name, rating, image }: showCardConstructor) {
    this.id = id
    this.name = name
    this.rating = rating
    this.images = image
  }
}