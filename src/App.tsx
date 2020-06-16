import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ListSlackMessages } from "./ListSlackMessages";
const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <ListSlackMessages />
            </header>
        </div>
    );
};

export default App;
