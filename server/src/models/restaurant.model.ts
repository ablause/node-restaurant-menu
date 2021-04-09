import { Prop, TimeStamps, getModelForClass } from '@typegoose/typegoose'
import { Contact, Media, Menu } from './subDocuments'

class Restaurant extends TimeStamps {
  @Prop({ required: true })
  public name!: string

  @Prop({ required: true })
  public title!: string

  @Prop()
  public description: string

  @Prop()
  public theme: Theme

  @Prop()
  public contact: Contact

  @Prop({ type: () => Media })
  public medias: Media[]

  @Prop()
  public menu: Menu
}

const RestaurantModel = getModelForClass(Restaurant)

export { Restaurant, RestaurantModel as default }
