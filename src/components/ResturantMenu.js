import { useState, useEffect } from "react"
import Shimmer from './Shimmer'
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const ResturantMenu = () => {

    const [resInfo, setResInfo] = useState(null);


    useEffect(() => {
        fetchMenu();
    }, [])

    const {resid} = useParams();

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resid);
        const json = await data.json();

        console.log(json);
        //now as we have made api call now we have to store the data using our state varible using useState.
        setResInfo(json.data);
        // console.log(resInfo.cards[2].card.card.info.name)
    }

    if(resInfo===null){
        return <Shimmer />
    }
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card//to overcome such chaining pain GraphQL is used.
    console.log(itemCards)


    return (
        <section className="resturant-menu">
            <h2>{name}</h2>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
             <ul>
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> */}
                {/* As we can see we are iterating over the itemCards so we map for each of the items present in the itemcards. */}
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {'₹ '}
                        {item.card.info.finalPrice / 100 || item.card.info.defaultPrice / 100 }
                    </li>
                    ))}
            </ul>
        </section>
    )
}
export default ResturantMenu