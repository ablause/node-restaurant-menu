import { Prop, TimeStamps } from '@typegoose/typegoose'

import Section from './section'
import Item from './item'

class Menu extends TimeStamps {
  @Prop({ type: () => Item })
  public items: Item[]

  @Prop({ type: () => Section })
  public sections: Section[]
}

export default Menu
