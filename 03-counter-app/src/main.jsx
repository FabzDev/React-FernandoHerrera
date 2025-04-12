import React from "react";
import ReactDOM from "react-dom/client"
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import './styles.css';
import { CounterApp } from "./CounterApp";


ReactDOM.createRoot( document.getElementById("root"))
.render(
    <React.StrictMode>
        <CounterApp initValue={20} />
        {/* <FirstApp title="Inuyasha!" episode="Seshomaru ataca de nuevo..."/> */}
        {/* <FirstApp /> */}
    </React.StrictMode>    
)