import React from "react";
import "./VidCall.css";
import VideoChat from "./VideoChat";

const App = () => {
    return (
        <div className="app">
            <header>
                <h1>
                    <span role="img" aria-label="Wave">
                        🌊
                    </span>{" "}
                    Current
                </h1>
            </header>
            <main>
                <VideoChat />
            </main>
            <footer>
                <p>@Treehacks2021</p>
            </footer>
        </div>
    );
};

export default App;
