import logo from "./logo.svg";
import "./App.css";

function App() {
  const projects = [{ title: "project1" }, { title: "project2" }];
  return (
    <div className="App">
      <header>
        <h1>Valentine Jones-Metsiou</h1>
        <img />
      </header>
      <h3>Studying Computer Science at San Francisco State University</h3>
      <div className="projects-carousel">
        {projects.map((project) => {
          return <div className="project-card">{project.title}</div>;
        })}
      </div>
      <footer>
        Valentine Jones
        <ul>
          <li>
            <a>Resume</a>
          </li>
          <li>
            <a>Contact Me</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
