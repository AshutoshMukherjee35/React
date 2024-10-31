import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useResturantInfo = (resid) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resid);
        const json = await data.json();

        console.log(json);
        //now as we have made api call now we have to store the data using our state varible using useState.
        setResInfo(json.data);
        // console.log(resInfo.cards[2].card.card.info.name)
    }

    return resInfo;
}

export default useResturantInfo;