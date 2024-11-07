interface PizzaToppings {
    name: string
    img: string
}
interface Props{
    items: PizzaToppings[]
    message: string
    backgroundcolor: string
    removeItem: (name: string) => void
}

const OurOrder = ({items, message, backgroundcolor, removeItem}: Props) => {
    return (<>
            <h2>Our Order:</h2>
        <div className='card-list'>

            {items.map((item) => (

                <ul key={item.name} className="order-card"style={{backgroundColor: backgroundcolor}} >
                    <h2>{item.name}</h2>
                    <div ><img src={item.img} alt={item.name} /></div>
                    <button onClick={() => removeItem(item.name)}>Remove</button>
                </ul>
            ))}

        </div>

        <h2>{message}</h2>
    </>
    )
}

export default OurOrder
