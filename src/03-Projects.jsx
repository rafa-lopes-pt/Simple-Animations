import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ProjectFrame from "./ProjectFrame";

const projectsList = [
    {
        title: "Digital Clock",
        descp: "A digital clock with spinning parts for seconds, minutes and seconds. Fully responsive!",
        link: "clock",
    },
    {
        title: "Polyrythms",
        descp: "A visual representation of a polyrythm that resets every 7.5 minutes",
        link: "polyrythms",
    },
    {
        title: "Landing Page",
        descp: "An implementation of a design made for a landing page menu, inspired by Karina Sirqueira",
        link: "landing-page",
    },
    {
        title: "Hello World",
        descp: "No portfolio is complete without an hello world project...",
        link: "hello-world",
    },
    {
        title: "Liquid Divs",
        descp: "The aplications of this are imense! Right now the effect is triggered by mouse movement, but the same animation can be applied for a itab indicator.",
        link: "liquid-divs",
    },
    {
        title: ".comedy:hover",
        descp: "Who said humor and comedy don't go together? This animation is intended for lists, grid menus, and more! See if you can get all the puns :)",
        link: "hover",
    },
];

function Projects({ ...props }) {
    const [focusedProject, setFocusedProject] = useState(null);

    return (
        <div id="projects-section">
         
            <main className="projects-container">
                {projectsList.map((el, i) => (
                    <ProjectFrame
                        el={el}
                        key={"Project-thumbnail-" + i}
                        onClick={() => setFocusedProject(el)}
                    />
                ))}
            </main>
            {focusedProject && (
                <ProjectFrame
                    el={focusedProject}
                    isFocused={true}
                    onMouseLeave={() => {
                        setFocusedProject(null);
                    }}
                />
            )}

            <div className="unsupported">
                <h1>Oops :(</h1>
                <p>
                    Seems like your browser does not support some of the
                    required features...
                </p>
                <p className="solution">
                    Try to view this on a computer, and if the problem
                    persists... don't hesitate to contact me!
                </p>
            </div>
        </div>
    );
}
export default Projects;
