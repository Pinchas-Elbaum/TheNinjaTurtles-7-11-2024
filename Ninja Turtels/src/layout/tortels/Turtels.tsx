import { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayTurtels from './DisplayTurtels'
import OurOrder from './OurOrder'
interface PizzaToppings {
  name: string
  img: string
}
interface Turtel {
  name: string
  img: string
  pizzaToppings: PizzaToppings[]
}


const Tortels = () => {
  const [turtels, setturtels] = useState<Turtel[]>([])
  const [itemsToOurOrder, setitemsToOurOrder] = useState<PizzaToppings[]>([])
  const [message, setmessage] = useState("")
  const [Orderbackgroundcolor, setOrderbackgroundcolor] = useState("yellow")


  useEffect(() => {
    axios.get('/data.json').then((res) => res.data).then((data) => setturtels(data))
  }, [])
  useEffect(() => {
    if (localStorage.getItem("itemsToOurOrder")) {
      setitemsToOurOrder(JSON.parse(localStorage.getItem("itemsToOurOrder")!))
    }
  }, [])

  const sendItemToOurOrder = (item: PizzaToppings) => {
    if (itemsToOurOrder.length >= 5) {
      setmessage("you can only select 5 items")
      setOrderbackgroundcolor("red")
      return
    }
    if (itemsToOurOrder.includes(item)) { return setmessage("you have already selected this item") } 

    setitemsToOurOrder([...itemsToOurOrder, item])
    localStorage.setItem("itemsToOurOrder", JSON.stringify(itemsToOurOrder))

    setmessage("")
  }

  const removeItem = (name: string) => {
    setitemsToOurOrder(itemsToOurOrder.filter((item) => item.name !== name))
    localStorage.setItem("itemsToOurOrder", JSON.stringify(itemsToOurOrder))
    setOrderbackgroundcolor("yellow")
    setmessage("")
  }


  return (
    <>
      <DisplayTurtels turtels={turtels} sendItemToOurOrder={sendItemToOurOrder} />
      <OurOrder items={itemsToOurOrder} message={message} backgroundcolor={Orderbackgroundcolor} removeItem={removeItem} />
    </>
  )


}

export default Tortels
