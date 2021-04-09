import { Prop } from '@typegoose/typegoose'

class Theme {
  @Prop()
  colors: object

  @Prop({ type: () => [String] })
  fonts: string[]
}

export default Theme
