import {useState, useEffect} from "react"

const useRestaurantCards = ()=>{
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [listForFilter, setListForFilter] = useState([]); 

useEffect(()=>{
    fetchData()
},[])

const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log("json data" , json)
    console.log("json data" , json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListForFilter(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

    return [ListOfRestaurants, listForFilter, setListOfRestaurants]
}

export default useRestaurantCards;