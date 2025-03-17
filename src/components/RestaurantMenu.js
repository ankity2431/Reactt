import {useParams} from "react-router"
import {useEffect, useState} from "react"
import {MENU_LIST} from "../utils/constant"
const RestaurantMenu = ()=>{

const [menuList, setmenuList] = useState({})
const {resId} = useParams()
    
    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_LIST + resId)
        const json = await data.json()
        setmenuList(json)
    }

     // Safe Destructuring
     const info = menuList?.data?.cards?.[2]?.card?.card?.info || {};
     const { name, avgRating, costForTwoMessage, cuisines = [] } = info;
 
     const menu = menuList?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};
     const { itemCards = [] } = menu;

// const {name, avgRating, costForTwoMessage, cuisines} = menuList?.data?.cards[2]?.card?.card?.info
// const {itemCards} = menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
console.log(menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)

    return (
        <div className="MenuContainer">
            <div className="restroDetail">
            <h1> {name}</h1>
            <h3>{cuisines.join(",")}</h3>
            </div>
            <div className="menuDetail">
                <ul>
                   {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;