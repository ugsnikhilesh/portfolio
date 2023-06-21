import React, { useState } from "react";

export function ProjectsCard(props) {
  const project = props.project;
  const [shadow, setShadow] = useState("");
  return (
    <div
      className={`card m-3 col-sm-6 col-md-4 col-12 bg-body-tertiary bs-bg-opacity w-sm-100 text-light ${shadow}`}
      onMouseEnter={() => setShadow("shadow shadow-lg")}
      onMouseLeave={() => setShadow("")}
      style={{
        // backgroundColor: "rgb(52, 58, 64)",
        maxWidth: "25rem",
        minWidth: "250px",
        height: "37rem",
        opacity: ".7",
        // --bs-bg-opacity: .5; write its alternative
      }}
    >
      <img
        src={project.image}
        className="card-img-top"
        alt="..."
        style={{ height: "350px", width: "auto" }}
      />
      <div className="card-body h-100">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.description}</p>
      </div>
      <div className="card-footer border-0 mx-0">
        <button
          disabled={project.disabledButton}
          className="btn btn-outline-primary w-100 mx-0"
          onClick={() => window.open(project.link, "_self")}
        >
          View Project
        </button>
      </div>
    </div>
  );
}

ProjectsCard.defaultProps = {
  project: {
    title: "Project 1",
    description: "This is a description of project 1",
    image: "https://via.placeholder.com/150",
    link: "./projects/calculator",
    disabledButton: false,
  },
};