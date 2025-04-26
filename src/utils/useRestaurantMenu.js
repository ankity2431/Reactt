
import {useEffect, useState} from "react"
import {MENU_LIST} from "../utils/constant"

const useRestaurantMenu = (resId)=>{
    const [menuList , setMenuList] = useState({})
    //fetch data
    useEffect(()=>{
        fetchData()
    },[resId])

    const fetchData = async ()=>{
        const data = await fetch(MENU_LIST + resId)
        const json = await data.json()
      console.log(json)
        setMenuList(json)
        
    }
   
    return menuList
}

export default useRestaurantMenu;