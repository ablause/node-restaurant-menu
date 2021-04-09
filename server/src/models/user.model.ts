import { getModelForClass, Prop, TimeStamps } from '@typegoose/typegoose'

class User extends TimeStamps {
  @Prop()
  public email: string

  @Prop()
  public password: string

  @Prop()
  public firstName: string

  @Prop()
  public lastName: string
}

const UserModel = getModelForClass(User)

export default UserModel
export { User }
