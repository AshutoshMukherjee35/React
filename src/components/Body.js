import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
//not using key (not acceptable) <<<< index as a key <<< unique id(best practice)

const Body = () => {
    return(
        <section className="body">
            <div className="body-container">
                
                    <div className="resturant-container">
                       {
                        resList.map(resturant => <ResturantCard key={resturant.info.id} resData={resturant}/>)
                       }
                    </div>
            </div>
        </section>
    )
}

export default Body;