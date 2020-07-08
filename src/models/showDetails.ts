import { detailsCardConstructor } from "../shared/interfaces"
import actor from "./actor"

export default class showDetails {
  name: string
  genres: Array<string>
  images: { medium: string, original: string }
  summary: string
  cast: Array<actor>
  constructor({name, genres, image, summary, cast}: detailsCardConstructor) {
    this.name = name
    this.genres = genres
    this.images = image
    this.summary = summary
    this.cast = cast
  }
}