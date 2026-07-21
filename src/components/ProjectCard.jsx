function ProjectCard({ project }) {
    return (
        <article className="project-card reveal">
            <div className="project-header">
                <span className="project-tag">Case Study</span>
                <h3>{project.title}</h3>
            </div>

            <div className="project-copy">
                <div>
                    <h4>Project Overview</h4>
                    <p>{project.overview}</p>
                </div>
                <div>
                    <h4>Technologies Used</h4>
                    <div className="project-stack">
                        {project.stack.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h4>Features</h4>
                    <ul className="project-list">
                        {project.features.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4>Challenges</h4>
                    <p>{project.challenges}</p>
                </div>
                <div>
                    <h4>Learning Outcomes</h4>
                    <p>{project.learning}</p>
                </div>
            </div>

           <div className="project-actions">


{
project.github && (

<a
href={project.github}
target="_blank"
rel="noreferrer"
className="project-button github"
>

GitHub

</a>

)

}



{
project.live && (

<a
href={project.live}
target="_blank"
rel="noreferrer"
className="project-button live"
>

Live Demo

</a>

)

}


</div>
        </article>
    );
}

export default ProjectCard;
