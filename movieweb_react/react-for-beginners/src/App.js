import {useState, useEffect} from "react";

const API_URL = "https://api.coinpaprika.com/v1/tickers";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(API_URL)
        .then((res) => res.json())
        .then((json) => {
          setCoins(json)
          setLoading(false)
        });},
      []);

  return (
    <>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>now Loading...</strong> : null}
      <ul>
        {coins.map((coin,index) => <li key={index}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</li>)}
      </ul>
    </>
  );
}

export default App;
