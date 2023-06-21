function HomePage(props) {
  return (
    <div
      className="bg-dark text-center my-0 bgimg"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        className="display-1 bg-dark text-align-center textgr4"
        style={{ paddingTop: "100px" }}
      >
        Portfolio
      </div>

      <div
        className="display-1 bg-dark text-align-center textgr4"
        style={{ paddingTop: "100px" }}
      >
        {props.dName}
      </div>
      <div
        className="display-6 bg-dark text-align-center textgr4"
        style={{ paddingTop: "100px" }}
      >
        {props.dDegree}
      </div>
      <div
        className="display-6 bg-dark text-align-center textgr4"
        style={{ paddingTop: "10px" }}
      >
        {props.dCollege}
      </div>
      <div
        className="display-6 bg-dark text-align-center textgr4"
        style={{ paddingTop: "10px" }}
      >
        {props.dBranch}
      </div>
      <div
        className="display-6 bg-dark text-align-center textgr4"
        style={{ paddingTop: "10px" }}
      >
        {props.dYear}
      </div>
    </div>
  );
}

export default HomePage;
