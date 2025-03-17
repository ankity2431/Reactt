
import {useState} from "react"; 

const CardFuntion = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);

  return (
    <div className="card-box">
      <div className="card">
        <h2>Count: {count}</h2>
        <button onClick={()=>{
            setCount(count+1)
        }}>Incriment</button>
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h4>Review: Good</h4>
      </div>
    </div>
  );
};

export default CardFuntion;
