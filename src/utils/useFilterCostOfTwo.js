import useListOfResturants from "./useListOfResturants";
import useFilterListOfResturants from "./useFilterListOfResturants";
import {  useEffect } from "react";

const useFilterCostOfTwo = () => {
    const listOfResturants = useListOfResturants();
    const [filteredResturants , setFilteredResturants] = useFilterListOfResturants();
  
    useEffect(() => {
        const sortedList = [...listOfResturants].sort((a, b) => {
          const costA = parseInt(a.info.costForTwo.match(/\d+/)[0]);
          const costB = parseInt(b.info.costForTwo.match(/\d+/)[0]);
          return costA - costB;
        });
        setFilteredResturants(sortedList);
      }, [listOfResturants]);

      return filteredResturants
    }
export default useFilterCostOfTwo