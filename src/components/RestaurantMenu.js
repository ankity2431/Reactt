import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuTitle from "./RestaurantMenuTitle";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuList = useRestaurantMenu(resId);

  if (!menuList) {
    return <h1>Loading...</h1>; // Display a loading state
  }

  // Safe Destructuring
  const info = menuList?.data?.cards?.[2]?.card?.card?.info || {};
  const { name, avgRating, costForTwoMessage, cuisines = [] } = info;

  const menu =
    menuList?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card || {};
  const { itemCards = [] } = menu;
  console.log("itemCards", itemCards);

  // const {name, avgRating, costForTwoMessage, cuisines} = menuList?.data?.cards[2]?.card?.card?.info
  // const {itemCards} = menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  console.log(
    "menutitle",
    menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const menuTitle =
    menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        const type = item.card?.card?.["@type"];
        return type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
               type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
      }
    );

  console.log("menutitleeee", menuTitle);
  return (
    <div className="MenuContainer">
      <div className="restroDetail">
        <h1 className="restroDetailTitle"> {name}</h1>
        <h3 className="restroDetailTitle">
          {cuisines.join(",")} - {costForTwoMessage}
        </h3>
      </div>
      <div className="menuDetail">
       {menuTitle.map((c) =>(<RestaurantMenuTitle data={menuTitle} />)) }
      </div>
    </div>
  );
};

export default RestaurantMenu;
