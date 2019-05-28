import React from 'react';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';

export default function AppRouter() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    )
}