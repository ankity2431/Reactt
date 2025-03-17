import CDN_URL from "../utils/constant";

const Cards = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = resData?.info
  
    return (
      <div className="cards">
        <img src={CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h4>{cuisines.join(",  ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };

  export default Cards;