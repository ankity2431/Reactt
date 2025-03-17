import Shimmer from "./Shimmer";
import Cards from "./Cards";
import {useState} from "react"; 
import {useEffect} from "react";
import {Link} from "react-router"

const Body = () => {

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [listForFilter, setListForFilter] = useState([]); 
    const [searchText, setSearchText] = useState("");
    
    useEffect(()=>{
        fetchData()
    }, [])
    

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log("json data" , json)
        console.log("json data" , json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListForFilter(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
   

    

    return ListOfRestaurants.length ===0 ? <Shimmer /> : (
      <div className="body">
        <div  className="search-items">
          <input type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button className="search-btn" onClick={()=>{
            const filterList = listForFilter.filter((restro)=>{
               return restro.info.name.toLowerCase().includes(searchText.toLowerCase())
                
                
            })
            console.log("FILTER LIST",filterList)
            setListOfRestaurants(filterList)
          }}>Search </button>
          <button className="topRestro-btn" onClick={()=>{
             const filteredList = ListOfRestaurants.filter((restro)=>{
               return restro.info.avgRating > 4.2
            })
           
            setListOfRestaurants(filteredList)
            console.log("LIST OF RESTRO",   ListOfRestaurants)
          }}>Top restaurants</button>
        </div>
        <div className="res-cards"> 
        
  
        { ListOfRestaurants.map((restaurant, index)=>(
          <Link to={"/restaurant/" + restaurant.info.id}> <Cards resData={restaurant} key={restaurant.info.id} /></Link>
    ))}
        </div>
      </div>
    );
  };

  export default Body;