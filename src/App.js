import React, {useState} from 'react';
import {Header} from "./components";
import {RouteComponent} from "./components/RouteComponent";

const App = () => {
    const [theme, setTheme] = useState(true)
    return (
        <div className={theme ? 'black' : 'white'}>
            <Header theme={theme} switchTheme={setTheme}/>
            <RouteComponent/>
        </div>
    )
};

export {App};