import React from "react";

export default function ProjectFrame({ el, isFocused, ...props }) {
    return (
        <div
            className={`project ${isFocused ? "project--focused" : ""}`}
            id={el.link}
            {...props}
        >
            <div className="project__thumbnail">
                {/* Add suspense fallback / loader */}

                <iframe
                    onLoad={(e) =>
                        // console.log(e.target.style.opacity)
                        (e.target.style.opacity = 1)
                    }
                    style={{ opacity: 0, border: "none" }}
                    src={`./animations/${el.link}.html`}
                    className=""
                ></iframe>
            </div>

            <div className="project__text">
                <h3 className="project__text__title">{el.title}</h3>
                <p className="project__text__descp">{el.descp}</p>
            </div>
        </div>
    );
}
