import './App.css';
import TodoFeature from "./features/Todo";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import AlbumFeature from "./features/Album/components";
import {useEffect} from "react";
import productApi from "./api/productApi";

// rsfp: snip

function App() {

    useEffect(() => {
        const fetchData = async () => {
            const data = await productApi.getAll()
            console.log(data)
        }
        fetchData()
    }, [])

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
                <Route path="/todos" element={<TodoFeature/>}/>
                <Route path="/albums" element={<AlbumFeature/>}/>
            </Routes>
            <p>Footer</p>
        </BrowserRouter>
    )
}

export default App;
