import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}
export default function AppRouter() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    )
}