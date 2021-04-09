import { Prop } from '@typegoose/typegoose'
import Media from '../media'

class Item {
  @Prop()
  public id: string

  @Prop()
  public title: string

  @Prop()
  public description: string

  @Prop({ default: true })
  public available: boolean

  @Prop({ type: () => Media })
  public medias: Media[]

  @Prop({ require: true, default: 0 })
  public price: number
}

export default Item
