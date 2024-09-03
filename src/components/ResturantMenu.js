import Shimmer from './Shimmer'
import { useParams } from "react-router-dom";
import useResturantInfo from '../utils/useResturantInfo';

const ResturantMenu = () => {
    const {resid} = useParams();
    const resInfo = useResturantInfo(resid)

    if(resInfo===null){
        return <Shimmer />
    }
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card//to overcome such chaining pain GraphQL is used.
    console.log(itemCards)


    return (
        <section className="resturant-menu">
            <h2 className="resturant-menu__name">{name}</h2>
            <p className="resturant-menu__cuisines">{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h2 className="resturant-menu__title">Menu</h2>
             <ul className="resturant-menu__items">
                
                {itemCards?.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {'₹ '}
                        {item.card.info.finalPrice / 100 || item.card.info.defaultPrice / 100 || item.card.info.price / 100 }
                    </li>
                    ))}
            </ul>
        </section>
    )
}
export default ResturantMenu