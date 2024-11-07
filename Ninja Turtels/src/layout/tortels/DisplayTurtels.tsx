interface PizzaToppings {
    name: string
    img: string
  }
  interface Turtel {
    name: string
    img: string
    pizzaToppings: PizzaToppings[]
  }

  interface Props{
    turtels: Turtel[]
    sendItemToOurOrder: (item: PizzaToppings) => void
  }
  
const DisplayTurtels = ({turtels, sendItemToOurOrder}: Props) => {
    
  
    return (
        <div className='card-list'>
    {turtels.map((turtel) => (
        <ul key={turtel.name} className="card">
      <div key={turtel.name}>
        <h2>{turtel.name}</h2>
        <div className="turtel"><img src={turtel.img} alt={turtel.name} /></div>
        <ul>
          <h2>Toppings:</h2>
          {turtel.pizzaToppings.map((topping) => (
            
            <li key={topping.name}>
              <button onClick={() => sendItemToOurOrder(topping)}>{topping.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </ul>
    ))}
  </div>

    )
}

export default DisplayTurtels
