import { Prop } from '@typegoose/typegoose'

class Section {
  @Prop({ required: true })
  public id!: string

  @Prop()
  public title!: string

  @Prop()
  public description: string

  @Prop({ required: true, default: 0 })
  public property: number

  @Prop({ type: () => Section })
  public children: Section[]
}

export default Section
