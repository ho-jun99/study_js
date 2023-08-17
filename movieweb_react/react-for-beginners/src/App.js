import styles from "./css/App.module.css"
import {useState,useEffect} from "react";

function App() {
    const [counter,setCounter] = useState(0);
    const [keyword, setKeyword] = useState("")
    const onClick = () => setCounter((prev) => prev + 1);
    console.log("every time will call !")
    useEffect(() => {
        console.log("CALLING API")
    }, []);

    useEffect(() => {
        if ( keyword !== "") console.log("SEARCH FOR ", keyword)
    }, [keyword]);
    const onKeywordChg = (e) => {
        setKeyword(e.target.value);
        console.log(keyword)
    }
    return (
        <div>
            <input value={keyword} onChange={onKeywordChg} type={"text"} placeholder={"여기에 검색어를 입력해주세요"}/>
            <h1 className={styles.title}>{counter}</h1>
            <button onClick={onClick}>클릭클릭</button>
        </div>
    );
}

export default App;
