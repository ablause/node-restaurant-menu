import { getModelForClass, Ref } from '@typegoose/typegoose'

import { Restaurant } from './restaurant.model'
import { User } from './user.model'

class Distributor {
  name: string

  restaurants: Array<Ref<Restaurant>>

  users: Array<Ref<User>>
}

const DistributorModel = getModelForClass(Distributor)

export default DistributorModel
export { Distributor }
