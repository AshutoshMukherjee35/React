import { useState, useEffect } from "react";
import { RESTURANT_URL } from "./constants";

const useListOfResturants = () => {
    const [listOfResturants, setlistOfResturants] = useState([]);

     //useEffect:-
     useEffect(()=>{
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTURANT_URL);
        
        const jsonValue = await data.json();
        //optional chaining
        setlistOfResturants(jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return listOfResturants;
}

export default useListOfResturants