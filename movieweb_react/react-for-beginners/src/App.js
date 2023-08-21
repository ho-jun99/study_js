import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
      <Router>
        <Routes><Route path="/home" element={<Home/>}/></Routes>
        <Routes><Route path="/movie/:id" element={<Detail/>}/></Routes>
      </Router>);
}

export default App;
