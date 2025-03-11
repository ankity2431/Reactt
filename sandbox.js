import React from "react";
import ReactDOM from "react-dom/client";

/* UI Design
 --header
    -logo
    -item list
 --Body
   -Search
   -Cards
 --Footor
   -Copyright
   -address
   -links

*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          alt="logoImg"
          src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg"
        />
      </div>
      <div className="items-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/027/381/351/small_2x/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const Cards = (props) =>{ 
  const {resData} = props
  
  return (
    <div className="cards">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLDbzk6vrGH7petp2Im0qrRgPE8Ws5DR-c_JwJk5MPLPpDFSvGiHz_VNEGps2c9f5vxk&usqp=CAU" />
      <h2>{resData.restaurant}</h2>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4> 
    </div>
    
  )
}

const resObj = {
          restaurant: "meghana-foods",
          city: "bangalore"
        
}



const Body = () => {
  return (
    <div className="body">
      <div className="search-items">
        <input type="text" />
        <button className="search-btn">Search </button>
      </div>
      <div className="res-cards">
        <Cards resData={resObj} />
       
       
        

      </div>
    </div>
  );
};

const App = () => {
  return (
    <div ClassName="app">
      <Header />
      <Body />
      
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
