import Shimmer from "./Shimmer";
import Cards from "./Cards";
import useRestaurantCards from "../utils/useRestaurantCards";
import {Link} from "react-router"
import { useState } from "react";


const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [ListOfRestaurants, listForFilter, setListOfRestaurants] = useRestaurantCards()
    

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
          <Link to={"/restaurant/" + restaurant.info.id}  key={restaurant.info.id}> <Cards resData={restaurant} /></Link>
    ))}
        </div>
      </div>
    );
  };

  export default Body;