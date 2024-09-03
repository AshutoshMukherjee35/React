import { RESTURANT_IMAGE_CDN_URL } from "../utils/constants"

const ResturantCard = (props) => {
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = props.resData?.info
    const visibleCuisines = cuisines.slice(0 , 2)
    return(
        <section className="w-80 rounded-2xl mt-[10%] cursor-pointer hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]">
            <div className="logo-container">
            <img className="res-logo w-full h-48 rounded-[15px] object-cover" alt="resturant food image" src={RESTURANT_IMAGE_CDN_URL+cloudinaryImageId}/>
            </div>
            <div className="my-4 mx-3">
            <h3 className="res-name font-bold text-[2rem] text-[rgba(2,6,12,0.92)] mb-3 no-underline">{name}</h3>
            <span className="text-[1rem] text-[rgba(2,6,12,0.6)] mt-[50%]">{visibleCuisines.join(', ')}</span>
            {cuisines.length > 2 && <span>......</span> }
            <p className="text-[1rem] text-[rgba(2,6,12,0.6)]">{costForTwo}</p>
            <p className="text-[1rem] text-[rgba(2,6,12,0.6)]">{avgRating} Stars</p>
            </div>
        </section>
    )
}
export default ResturantCard; 