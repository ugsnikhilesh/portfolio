function ResumePage({ education, experience, skills }) {
  return (
    <div
      className="py-3 text-center bgimg2"
      style={{
        backgroundColor: "orange",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h1 className="display-1 textgr3 my-5">Resume</h1>
      <div className="container w-100 text-start text-light">
        <h1>Education</h1>
        {education.map((edu, index) => (
          <div className="lead" key={index}>
            {edu}
          </div>
        ))}

        <h1 className="mt-5">Experience</h1>
        {experience.map((exp, index) => (
          <div className="lead" key={index}>
            {exp}
          </div>
        ))}

        <h1 className="mt-5">Skills</h1>
        {}
        <div className="row row-cols-auto">
          {Object.keys(skills).map((skill, index) => (
            <div className="col-5 me-5" key={index}>
              <div className="lead mt-2">
                {skill}
              </div>
              <div className="row p-0 ms-0">
                <div
                  className="progress my-3 col-10 p-0"
                  style={{ minWidth: "200px", height: "20px" }}
                >
                  <div
                    className="progress-bar m-0"
                    role="progressbar"
                    style={{
                      width: skills[skill],
                      backgroundColor: "rgb(93, 169, 225)",
                    }}
                    aria-valuenow={skills[skill]}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="col-2 d-flex align-items-center">
                  {skills[skill]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ResumePage.defaultProps = {
  education: [
    "B.Tech in Computer Science and Engineering from",
    "Vellore Institute of Technology, Chennai, Tamil Nadu, India",
  ],
  experience: [
    "MERN Stack Summer Internship by Ethnus",
  ],
  skills: {
    "C": "70%",
    "C++": "65%",
    "Java": "90%",
    "HTML": "90%",
    "CSS": "70%",
    "JavaScript": "80%",
    "Express.js": "70%",
    "React": "75%",
    "Node.js": "75%",
    "MongoDB": "75%",
    "MySQL": "90%",
    "PHP": "80%"
  },
};

export default ResumePage;
