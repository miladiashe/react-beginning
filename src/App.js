import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }

        setToDo("");
        setToDos((currentArray) => [toDo, ...toDos]);
    };
    console.log(toDos);
    return (
        <div>
            <h1>MY TO DOS ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add TO DO</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
