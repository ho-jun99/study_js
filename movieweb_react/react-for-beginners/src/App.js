import {useState, useEffect} from "react";
function App() {
    const [myTodo,setMyTodo] = useState("")
    const [myTodos,setMyTodos] = useState([]);
    const onChgTodoInput = (e) => {
        setMyTodo(e.target.value);
    };
    const onTodoSubmit = (e) => {
        e.preventDefault()
        if (myTodo === "") return;
        setMyTodo("");
        setMyTodos((prevArray) => [...myTodos,myTodo])
        console.log(myTodo)
    }

    console.log(myTodos)
    return (
        <>
            <h1>CURRENT TODOS :  {myTodos.length}</h1>
            <form onSubmit={onTodoSubmit}>
                <input value={myTodo} onChange={onChgTodoInput} type={"text"} placeholder={"Write your to do"}></input>
                <button type={"submit"}>확인</button>
            </form>
            <hr/>
            <ul></ul>
                {myTodos.map((item,index) => {
                    return <li key={index+item} >{item}</li>
                })}
        </>
    );
}

export default App;
