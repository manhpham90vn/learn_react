import './App.css';
import TodoFeature from "./features/Todo";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import AlbumFeature from "./features/Album/components";

// rsfp: snip

function App() {
    return (
        <BrowserRouter>
            <p>Header</p>
            <Link to={"/todos"}>Todos</Link>
            <br/>
            <Link to={"/albums"}>Albums</Link>
            <br/>
            <NavLink to={"/todos"} style={{color: 'red'}}>Todos</NavLink>
            <br/>
            <NavLink to={"/albums"} style={{color: 'red'}}>Albums</NavLink>

            <Routes>
                <Route path="/" element={<TodoFeature/>}/>
                <Route path="/todos" element={<TodoFeature/>}/>
                <Route path="/albums" element={<AlbumFeature/>}/>
            </Routes>
            <p>Footer</p>
        </BrowserRouter>
    )
}

export default App;
