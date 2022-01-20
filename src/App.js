import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
    const [value, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onChange = (event) => setKeyword(event.target.value);
    const onClick = () => setValue((prev) => prev + 1);
    console.log("언제나 실행되는 코드~~~");

    useEffect(() => {
        console.log("API 부르기~~");
    }, []);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("검색:", keyword);
        }
    }, [keyword]);
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here.."
            ></input>
            <h1>{value}</h1>
            <button onClick={onClick}>꾹</button>
        </div>
    );
}

export default App;
