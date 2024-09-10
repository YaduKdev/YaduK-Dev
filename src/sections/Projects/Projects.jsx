import styles from "./ProjectsStyles.module.css";
import nived from "../../assets/nivedv.png";
import urbanity from "../../assets/urbanity.png";
import robo from "../../assets/robo.png";
import quiz from "../../assets/quiz.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={nived}
          link="https://yadukdev.github.io/NivedV/"
          h3="Nived V"
          p="Portfolio (LIVE)"
        />
        <ProjectCard
          src={urbanity}
          link="https://urbanityclothing.netlify.app/"
          h3="Urbanity Clothing"
          p="Online Clothing Store"
        />
        <ProjectCard
          src={robo}
          link="https://yadukdev.github.io/Robo-Friends/"
          h3="Robo Friendzz"
          p="Dynamic Search App"
        />
        <ProjectCard
          src={quiz}
          link="https://yadukdev.github.io/vue-quizapp/"
          h3="Quiz App"
          p="Simple VueJs Quiz App"
        />
      </div>
    </section>
  );
}

export default Projects;
