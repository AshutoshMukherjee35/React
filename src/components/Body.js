import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {

    //usestate maintains the state of ur component. Scope of usestate is within the component.
    //Local State variable - Super powerful variable. when u call this useSTate it will give u a state variable u receive the state variable using the destructuring as done below
    // to modify the variable used in useState we have to use a function in de-structure of elements.
    const [listOfResturants, setlistOfResturants] = useState(resList);//destructuring on the fly
    /**
     * behind the scenes this is what is happening.
     *  const [listOfResturants, setlistOfResturants] = arr
     *  const listOfResturants = arr[0];
     * const setlistOfResturants = arr[1];
     */

    //normal js variable
    // let listOfResturants = []

    //normal js variable
    // let listOfResturantsJS = [
    //     {
    //         "info": {
    //           "id": "748065",
    //           "name": "Burger King",
    //           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_748065.JPG",
    //           "locality": "OMR Semmanchey",
    //           "areaName": "Kancheepuram",
    //           "costForTwo": "₹350 for two",
    //           "cuisines": [
    //             "Burgers",
    //             "American"
    //           ],
    //           "avgRating": 4.3,
    //           "parentId": "166",
    //           "avgRatingString": "4.3",
    //           "totalRatingsString": "1K+",
    //           "sla": {
    //             "deliveryTime": 27,
    //             "lastMileTravel": 3.7,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "25-30 mins",
    //             "lastMileTravelString": "3.7 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //           },
    //           "availability": {
    //             "nextCloseTime": "2024-08-22 03:00:00",
    //             "opened": true
    //           },
    //           "badges": {
    //             "imageBadges": [
    //               {
    //                 "imageId": "Rxawards/_CATEGORY-Burger.png",
    //                 "description": "Delivery!"
    //               }
    //             ]
    //           },
    //           "isOpen": true,
    //           "type": "F",
    //           "badgesV2": {
    //             "entityBadges": {
    //               "imageBased": {
    //                 "badgeObject": [
    //                   {
    //                     "attributes": {
    //                       "description": "Delivery!",
    //                       "imageId": "Rxawards/_CATEGORY-Burger.png"
    //                     }
    //                   }
    //                 ]
    //               },
    //               "textBased": {
                    
    //               },
    //               "textExtendedBadges": {
                    
    //               }
    //             }
    //           },
    //           "aggregatedDiscountInfoV3": {
    //             "header": "ITEMS",
    //             "subHeader": "AT ₹99"
    //           },
    //           "differentiatedUi": {
    //             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             "differentiatedUiMediaDetails": {
    //               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //               "lottie": {
                    
    //               },
    //               "video": {
                    
    //               }
    //             }
    //           },
    //           "reviewsSummary": {
                
    //           },
    //           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //           "restaurantOfferPresentationInfo": {
                
    //           },
    //           "externalRatings": {
    //             "aggregatedRating": {
    //               "rating": "--"
    //             }
    //           },
    //           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         },
    //         "analytics": {
              
    //         },
    //         "cta": {
    //           "link": "https://www.swiggy.com/restaurants/burger-king-omr-semmanchey-kancheepuram-chennai-748065",
    //           "type": "WEBLINK"
    //         }
    //       },
    //       {
    //         "info": {
    //           "id": "485445",
    //           "name": "Chinese Wok",
    //           "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    //           "locality": "Old Mahabalipuram Road OMR",
    //           "areaName": "Old Mahabalipuram Road OMR",
    //           "costForTwo": "₹250 for two",
    //           "cuisines": [
    //             "Chinese",
    //             "Asian",
    //             "Tibetan",
    //             "Desserts"
    //           ],
    //           "avgRating": 3.9,
    //           "parentId": "61955",
    //           "avgRatingString": "3.9",
    //           "totalRatingsString": "1K+",
    //           "sla": {
    //             "deliveryTime": 35,
    //             "lastMileTravel": 5,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "30-35 mins",
    //             "lastMileTravelString": "5.0 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //           },
    //           "availability": {
    //             "nextCloseTime": "2024-08-22 02:00:00",
    //             "opened": true
    //           },
    //           "badges": {
                
    //           },
    //           "isOpen": true,
    //           "type": "F",
    //           "badgesV2": {
    //             "entityBadges": {
    //               "imageBased": {
                    
    //               },
    //               "textBased": {
                    
    //               },
    //               "textExtendedBadges": {
                    
    //               }
    //             }
    //           },
    //           "aggregatedDiscountInfoV3": {
    //             "header": "ITEMS",
    //             "subHeader": "AT ₹149"
    //           },
    //           "differentiatedUi": {
    //             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             "differentiatedUiMediaDetails": {
    //               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //               "lottie": {
                    
    //               },
    //               "video": {
                    
    //               }
    //             }
    //           },
    //           "reviewsSummary": {
                
    //           },
    //           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //           "restaurantOfferPresentationInfo": {
                
    //           },
    //           "externalRatings": {
    //             "aggregatedRating": {
    //               "rating": "3.3",
    //               "ratingCount": "20+"
    //             },
    //             "source": "GOOGLE",
    //             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    //           },
    //           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         },
    //         "analytics": {
              
    //         },
    //         "cta": {
    //           "link": "https://www.swiggy.com/restaurants/chinese-wok-old-mahabalipuram-road-omr-chennai-485445",
    //           "type": "WEBLINK"
    //         }
    //       },
    //       {
    //         "info": {
    //           "id": "564242",
    //           "name": "KFC",
    //           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_564242.JPG",
    //           "locality": "Rajiv Gandhi Salai",
    //           "areaName": "Sholinganallur",
    //           "costForTwo": "₹400 for two",
    //           "cuisines": [
    //             "Burgers",
    //             "Fast Food",
    //             "Rolls & Wraps"
    //           ],
    //           "avgRating": 4.3,
    //           "parentId": "547",
    //           "avgRatingString": "4.3",
    //           "totalRatingsString": "1K+",
    //           "sla": {
    //             "deliveryTime": 18,
    //             "lastMileTravel": 2,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "15-20 mins",
    //             "lastMileTravelString": "2.0 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //           },
    //           "availability": {
    //             "nextCloseTime": "2024-08-21 23:00:00",
    //             "opened": true
    //           },
    //           "badges": {
    //             "imageBadges": [
    //               {
    //                 "imageId": "Rxawards/_CATEGORY-Burger.png",
    //                 "description": "Delivery!"
    //               }
    //             ]
    //           },
    //           "isOpen": true,
    //           "type": "F",
    //           "badgesV2": {
    //             "entityBadges": {
    //               "imageBased": {
    //                 "badgeObject": [
    //                   {
    //                     "attributes": {
    //                       "description": "Delivery!",
    //                       "imageId": "Rxawards/_CATEGORY-Burger.png"
    //                     }
    //                   }
    //                 ]
    //               },
    //               "textBased": {
                    
    //               },
    //               "textExtendedBadges": {
                    
    //               }
    //             }
    //           },
    //           "aggregatedDiscountInfoV3": {
    //             "header": "40% OFF",
    //             "subHeader": "UPTO ₹80"
    //           },
    //           "differentiatedUi": {
    //             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             "differentiatedUiMediaDetails": {
    //               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //               "lottie": {
                    
    //               },
    //               "video": {
                    
    //               }
    //             }
    //           },
    //           "reviewsSummary": {
                
    //           },
    //           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //           "restaurantOfferPresentationInfo": {
                
    //           },
    //           "externalRatings": {
    //             "aggregatedRating": {
    //               "rating": "--"
    //             }
    //           },
    //           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         },
    //         "analytics": {
              
    //         },
    //         "cta": {
    //           "link": "https://www.swiggy.com/restaurants/kfc-rajiv-gandhi-salai-sholinganallur-chennai-564242",
    //           "type": "WEBLINK"
    //         }
    //       }
    // ]
    const[searchQuery , setsearchQuery] = useState("");
    const handleInput = (event) => {
        setsearchQuery(event.target.value);
    }
    
    const filterCostOfTwo = () => {
        const sortedList = [...listOfResturants].sort((a, b) => {
            const costA = parseInt(a.info.costForTwo.match(/\d+/)[0]);
            const costB = parseInt(b.info.costForTwo.match(/\d+/)[0]);
            return costA - costB;
          });
          setlistOfResturants(sortedList);
        // console.log(sortedList)
    }

    const showResult = () => {
        let result = searchQuery.toLowerCase();
        const filteredList = listOfResturants.filter((resturant) => resturant.info.name.toLowerCase() == result);
        setlistOfResturants(filteredList)
    }

    const resetFilters = () => {
        setlistOfResturants(resList);
    } 
    
    // function showResult() {
    //    let resturantList = listOfResturants;
    //    let element = document.getElementById('search-box');
    //    let result = element.value.toLowerCase();
    //    const foundResturant = resturantList.filter((resturant)=>resturant.info.name.toLowerCase() == result);
    //    console.log(foundResturant)
    // }

    return(
        <section className="body">
               <div className="filter-container">
                <button className="top-rated-resturants-btn" onClick={()=>{
                //    listOfResturants = listOfResturants.filter(resturant => resturant.info.avgRating > 4)
                //     console.log(listOfResturants)
                    const filteredList = listOfResturants.filter(resturant => resturant.info.avgRating > 4)
                    setlistOfResturants(filteredList);
                }}>
                    Top Rated Resturants
                </button>
                <button className="filter-price-high-to-low" onClick={filterCostOfTwo}>Filter price for 2: Low to High</button>          
                <button className="filter-price-high-to-low" onClick={resetFilters}>Reset Filters</button>
                <input id="search-box" className="search-box" placeholder="Search" value={searchQuery} onChange={handleInput} />
                <button onClick={showResult}>Search</button>
                </div>
            <div className="body-container">              
                    <div className="resturant-container">
                       {
                        listOfResturants.map(resturant => <ResturantCard key={resturant.info.id} resData={resturant}/>)
                       }
                    </div>
            </div>
        </section>
    )
}

export default Body;