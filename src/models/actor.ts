import { actorConstructor } from "../shared/interfaces"

export default class actor {
  name: string
  images: { original: string, medium: string }
  constructor({ name, image }: actorConstructor) {
    this.name = name
    this.images = image
  }
}