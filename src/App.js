import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import Calculator from "./components/Calculator";
import UsersTable from "./components/UsersTable";
import WordCounter from "./components/WordCounter";
import AgeCalculator from "./components/AgeCalculator";
import CalculatorImage from "./images/calculator.jpeg";
import WordCounterImage from "./images/word-counter.jpeg";
import UsersTableImage from "./images/users-table.jpeg";
import AgeCalculatorImage from "./images/age-calculator.jpeg";
function App() 
{
  const name = "Utukuri Geyarka S Nikhilesh";
  const degree = "B.Tech";
  const branch = "Computer Science and Engineering";
  const email = "gsnikhilesh.utukuri@gmail.com";
  const phone = "+91 9848223688";
  const projects = [
    {
      title: "Responsive Paragraph Word Counter",
      link: "./#/projects/word-counter",
      image: WordCounterImage,
      disabledButton: false
    },
    {
      title: "Calculator",
      link: "./#/projects/calculator",
      image: CalculatorImage,
      disabledButton: false
    },
    {
      title: "Data extraction from API",
      link: "./#/projects/users-table",
      image: UsersTableImage,
      disabledButton: false
    },
    {
      title: "Age Calculator",
      link: "./#/projects/age-calculator",
      image: AgeCalculatorImage,
      disabledButton: false
    },
  ];

  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      <Header dName={name} />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                dName={name}
                dBranch={branch}
                dDegree={degree}
              />
            }
          />
          {/* Route to pages */}
          <Route path="/resume" element={<ResumePage />} />
          <Route
            path="/projects"
            element={<ProjectsPage projects={projects} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Routes to projects */}
          <Route path="/projects/calculator" element={<Calculator />} />
          <Route path="/projects/age-calculator" element={<AgeCalculator />} />
          <Route path="/projects/users-table" element={<UsersTable />} />
          <Route path="/projects/word-counter" element={<WordCounter />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
