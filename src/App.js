import React, {useEffect,useState} from "react";
import axios from "axios";
import Coin from "./components/Coin";
import Search from "./components/Search";
import './App.css';

function App() {
  const [coinData, setCoinData] = useState([]);
  const [filterName, setFilterName] = useState("");
  
  const filterNameHandler = (name) => {
    setFilterName(name);
  }
  
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`)
    .then(res => {
      setCoinData(res.data);
      //console.log(res.data);
    })
    .catch(error => console.log("API ERROR: "+error));
  }, []);


  return (
    <div className="App">
      <Search filterNameHandler={filterNameHandler}/>

      <div className="content-wrapper">
      {coinData.filter(coin => coin.name.toLowerCase().includes(filterName.toLowerCase())).map(coin => {
        return(
          <Coin
          key={coin.id}
          img={coin.image}
          name={coin.name}
          price={coin.current_price}
          perc_change={coin.price_change_percentage_24h}
          />
        )
      })}
      </div>
    </div>
  );
}

export default App;
