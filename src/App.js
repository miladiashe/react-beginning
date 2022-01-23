import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    const [whatCoin, setWhatCoin] = useState();

    const onMoney = (event) => {
        setMoney(event.target.value);
    };

    const onSelect = (event) => {
        setWhatCoin(event.target.value);
    };

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>코인을 얼마나 살 수 있을까?</h1>
            {loading ? (
                <strong>로! 딩! 중!</strong>
            ) : (
                <select value={whatCoin} onChange={onSelect}>
                    {coins.map((coin) => (
                        <option key={coin.id}>
                            {coin.name} ({coin.symbol}) :{" "}
                            {coin.quotes.USD.price}USD
                        </option>
                    ))}
                </select>
            )}
            <hr></hr>
            <input onChange={onMoney} value={money} type="number"></input>
            <span> USD </span>
            <button>Calculate!</button>
        </div>
    );
}

export default App;
