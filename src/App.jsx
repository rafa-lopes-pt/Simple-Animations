import { useState } from "react";
import "./css.css";
import Projects from "./03-Projects";

function App() {
    return (
        <>
            <header class="header">
                <h1 class="header__title">Simple Animations</h1>
                <div class="header__links">
                    <a href="https://rafa-lopes.netlify.app/" target="_blank">
                        <i class="fa-regular fa-user"></i>Portfolio
                    </a>
                    <a href="https://github.com/rafa-lopes-pt" target="_blank">
                        <i class="fa-brands fa-github"></i>Github
                    </a>
                </div>
            </header>
            <Projects></Projects>
        </>
    );
}

export default App;
