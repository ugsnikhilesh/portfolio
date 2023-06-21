import { ProjectsCard } from "../components/ProjectCard";

function ProjectsPage(props) {
  const projects = props.projects;

  return (
    <div
      className="py-3 text-center bgimg2"
      style={{ backgroundColor: "violet", minHeight: "100vh", width: "100%" }}
    >
      <h1 className="display-1 textgr3 my-5">Projects</h1>
      <div className="container w-100">
        <div className="row row-cols-auto w-100">
          {projects.map((project, index) => {
            return <ProjectsCard project={project} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

ProjectsPage.defaultProps = {
  projects: [
    {
      title: "Project 1",
      description: "This is a description of project 1",
      image: "https://via.placeholder.com/150",
      link: "./projects/calculator",
    }
  ],
};

export default ProjectsPage;
