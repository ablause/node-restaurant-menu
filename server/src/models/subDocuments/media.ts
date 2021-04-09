import { Prop } from '@typegoose/typegoose'

class Media {
  @Prop()
  type: string

  @Prop()
  name: string

  @Prop()
  url: string
}

export default Media
