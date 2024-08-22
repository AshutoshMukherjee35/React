import { RESTURANT_IMAGE_CDN_URL } from "../utils/constants"

const ResturantCard = (props) => {
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = props.resData?.info
    const visibleCuisines = cuisines.slice(0 , 2)
    return(
        <section className="resturant-card">
            <div className="logo-container">
            <img className="res-logo" alt="resturant food image" src={RESTURANT_IMAGE_CDN_URL+cloudinaryImageId}/>
            </div>
            <div className="resturant-card__details">
            <h3 className="res-name">{name}</h3>
            <span>{visibleCuisines.join(', ')}</span>
            {cuisines.length > 2 && <span>......</span> }
            <p>{costForTwo}</p>
            <p>{avgRating} Stars</p>
            </div>
        </section>
    )
}
export default ResturantCard; 