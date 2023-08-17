import {useState, useEffect} from "react";


function Hello() {
    useEffect(
        () => {
            console.log(" :)")
            return () => console.log(" :(")
        }, [])
    return (
        <h1>HELLO WORLD !</h1>
    )
}

function App() {
    const [showing, setShowing] = useState(false)
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            <button onClick={onClick}> {showing ? "HIDE" : "SHOW"}</button>
            {showing ? <Hello/> : null}
        </div>
    );
}

export default App;
