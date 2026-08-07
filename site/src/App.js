import "./App.css";
import { useEffect, useState } from "react";
import ExperienceGraph from "./components/ExperienceGraph";

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="App">
      <main>
        <header>
          <section>
            <h1>Valentine Jones-Metsiou</h1>
            <h3>CS Student at San Francisco State University</h3>
          </section>
          <img src="/profile2.png" alt="Nice image of Valentine" />
        </header>
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-carousel">
            {projects.map((project) => {
              return (
                <div className="project-card" key={project.id}>
                  <a href={project.project_url}>
                    <h4>{project.title}</h4>
                    <img src={project.image_url} />
                    <p>{project.description}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <ExperienceGraph />
        </section>
        <section className="personal">
          <h2>Personal</h2>
          <p>
            Hello! I have significant full stack experience and I'm always
            excited to start new projects. My three biggest values in life are
            my family, faith, and friends.
          </p>
        </section>
      </main>
      <footer>
        Valentine Jones
        <ul>
          <li>
            <a
              href="https://docs.google.com/document/d/12lrd8haV3VrZm2Z9GcRufWe29WADJzQVEwtnS9chDeQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a>valentine.artstuff@gmail.com</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
