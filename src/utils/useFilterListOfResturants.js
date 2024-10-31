import { useState } from "react";

const useFilterListOfResturants = (listOfResturants) => {
    const [filteredResturants , setFilteredResturants] = useState(listOfResturants);

    return [filteredResturants , setFilteredResturants]
}

export default useFilterListOfResturants