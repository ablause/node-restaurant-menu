import { Prop } from '@typegoose/typegoose'

class Contact {
  @Prop()
  phone: string

  @Prop()
  email: string
}

export default Contact
