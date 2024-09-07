import ResturantCard, {withSpecialOffers} from "./ResturantCard";
import { useEffect } from "react";
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTURANT_URL } from "../utils/constants";
import useListOfResturants from "../utils/useListOfResturants";
import useFilterListOfResturants from "../utils/useFilterListOfResturants";
import useFilterCostOfTwo from "../utils/useFilterCostOfTwo";
import useSearchQuery from "../utils/useSearchQuery";


const Body = () => {

    const listOfResturants = useListOfResturants();
    const [filteredResturants , setFilteredResturants] = useFilterListOfResturants(listOfResturants);
    const filterCostOfTwo = useFilterCostOfTwo();
    const {searchQuery, handleInput} = useSearchQuery();

    const showResult = () => {
        let result = searchQuery.toLowerCase();
        const filteredList = listOfResturants.filter((resturant) => resturant.info.name.toLowerCase().includes(result));
        setFilteredResturants(filteredList)
    }

    // useEffect:-
    useEffect(()=>{
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTURANT_URL);
        
        const jsonValue = await data.json();
        //optional chaining
        setFilteredResturants(jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const resetFilters = async () => {
        // listOfResturants([]);
        setFilteredResturants([]);
        handleInput({ target: { value: "" } });
        await fetchData();
    } 

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) {
        return(
            <div>
                <h1> You seem to be offline please check your internet connection......... </h1>
            </div>
        )
    }

    // Higher order component

    const ResturantCardOffer = withSpecialOffers(ResturantCard);

    return listOfResturants.length === 0 ? <Shimmer /> : (
        <section className="mx-[10%]">
               <div className="filter-container m-10 flex justify-evenly">
                <button className="px-4 py-2 bg-gray-200 rounded-2xl" onClick={()=>{
                    const filteredList = listOfResturants.filter(resturant => resturant.info.avgRating > 4.4)
                    setFilteredResturants(filteredList);
                }}>
                    Top Rated Resturants
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded-2xl" onClick={()=> setFilteredResturants(filterCostOfTwo)}>Filter price for 2: Low to High</button>          
                <button className="px-4 py-2 bg-gray-200 rounded-2xl" onClick={resetFilters}>Reset Filters</button>
                <div>
                <input id="search-box" className="border border-solid border-black" placeholder="Search" value={searchQuery} onChange={handleInput} />
                <button className="px-4 py-2 bg-gray-200 ml-1 rounded-2xl" onClick={showResult}>Search</button>
                </div>
                </div>
            <div className="body-container">              
                    <div className="flex justify-evenly flex-wrap">
                       {
                        (filteredResturants.length>0 ? filteredResturants : listOfResturants).map(resturant => 
                      <Link key={resturant.info.id} to={"/resturants/"+resturant.info.id}>
                        {/* If our resturant has offers then display the offers on the card */}

                        {resturant.info.aggregatedDiscountInfoV3 ? <ResturantCardOffer resData={resturant}/> :  <ResturantCard resData={resturant}/> }
                        
                      </Link>
                    )
                       }
                    </div>
            </div>
        </section>
    )
}

export default Body;