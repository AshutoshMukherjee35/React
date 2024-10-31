import Shimmer from './Shimmer'
import { useParams } from "react-router-dom";
import useResturantInfo from '../utils/useResturantInfo';
import ResturantCategory from './ResturantCategory';
import { useState } from 'react';

const ResturantMenu = () => {
    const {resid} = useParams();
    const resInfo = useResturantInfo(resid)
    const[showIndex , setShowIndex] = useState(0);

    const dummy = 'dummy data';

    if(resInfo===null){
        return <Shimmer />
    }
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card//to overcome such chaining pain GraphQL is used.
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const mainCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((headerCategory) => headerCategory?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(mainCategory)

    const handleSetShowIndex = (index) => {
        if(index === showIndex) {
            setShowIndex(-1);
        } else {
            setShowIndex(index)
        }
    }


    return (
        <section className="resturant-menu mx-[10%]">
            <h2 className="resturant-menu__name text-[4rem] font-bold">{name}</h2>
            <p className="resturant-menu__cuisines text-[1rem] text-[rgb(255, 82, 0)] my-[0.75rem]">{cuisines.join(', ')} - {costForTwoMessage}</p>
            {/* Categories accordian */}
            {mainCategory.map((category, index) => (

                //Now the Resturant category is a controlled component. This is known as lifting the state up in REACT
                <ResturantCategory
                 key={category?.card?.card?.title} 
                 headerData = {category?.card?.card}
                 showItems = {index === showIndex ? true : false}
                 setShowIndex = {()=> handleSetShowIndex(index)}
                 dummy = {dummy}
                 />
                 ))}
        </section>
    )
}
export default ResturantMenu