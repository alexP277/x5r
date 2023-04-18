import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Routing from "./pages";
import logo from "./logo.svg";

function App() {

    return (
        <div>
                <header className="header">
                    <Link to={'/'}>
                        <div className="logo">
                            <img src={logo} alt="React логотип"/>
                            <div className="divider"></div>
                        </div>
                    </Link>
                    <nav>
                        <Link to={'/'}>Товары</Link>
                        <Link to={'/groups'}>Группы</Link>
                        <Link to={'/clusters'}>Кластеры</Link>
                    </nav>
                </header>
                <Routing/>
        </div>
    );
}

export default App;
