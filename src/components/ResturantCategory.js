import { useState } from "react";
import ItemList from "./ItemList";
const ResturantCategory = ({headerData , showItems, setShowIndex}) => {
    // console.log(headerData)
// As the child component i.e ResturantCategory is managing it's own state it is a uncontrolled component right now. But if the state of child
// component is being managed by the parent component(Resturant menu) then it is a controlled component. This is known as lifting the state up
    // const [showItems , setShowItems] = useState(index === 0);
    const handleClick = () => {
        // setShowItems(!showItems);
        setShowIndex();
    }
    return (
        <div>
            {/* Header */}
            <div className="w-full bg-gray-50 shadow-lg p-4 my-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{headerData.title} ({headerData.itemCards.length})</span>
                <span>{!showItems ? '⬇️' : '⬆️'}</span>
                </div>
                 {/* Accordian body */}
               { showItems && <ItemList items={headerData.itemCards} /> }
            </div>
        </div>
    )
}
export default ResturantCategory;