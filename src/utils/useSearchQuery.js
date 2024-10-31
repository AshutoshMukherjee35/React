import { useState } from "react";

const useSearchQuery = () => {
    const[searchQuery , setsearchQuery] = useState("");

    const handleInput = (event) => {
        setsearchQuery(event.target.value);
    }

    return {searchQuery , handleInput};

}

export default useSearchQuery