import { RESTURANT_IMAGE_CDN_URL } from "../utils/constants"
import { addItems } from "../slices/cartSlice"
import { useDispatch } from "react-redux"

const ItemList = ({items, dummy}) => {
    // console.log(items)
    // console.log(dummy)

    const dispatch = useDispatch();
    
    const handleAddItem = (item) => {
        //dispatch the action 
        dispatch(addItems(item)) //whatever we pass inside addItems it will go inside our cart and that is our action.payload

        /**
         whenever we dispatch an action it creates a payload object and add as second argument in our addItems reducer
         {
            payload: pizza
         }
         */
    }


    return (
        <div>
            {
                items.map( (item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">
                    <div className="w-11/12">
                       <div className="flex flex-col mb-4"> 
                            <span>{item.card.info.name}</span> 
                            <span>  ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        </div>

                        <div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                    </div>

                    <div className="w-1/12 p-4 relative"> 
                        <img src={RESTURANT_IMAGE_CDN_URL + item.card.info.imageId} alt="Item Image" />
                        <button className="p-2 bg-white shadow-lg left-8 absolute bottom-1 rounded-lg"
                        //  onClick={handleAddItem}
                        onClick={() => handleAddItem(item)}
                        >   
                            Add +
                        </button>
                    </div>
                </div>
                    
                    ))}
        </div>
    )
}
export default ItemList