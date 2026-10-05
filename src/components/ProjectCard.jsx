function ProjectCard({ project, index }) {
    return (
        <article className="project-card reveal">
            <div className="project-card-topline">
                <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-tag">{project.category}</span>
            </div>

            <h3>{project.title}</h3>
            <p className="project-overview">{project.overview}</p>

            <div className="project-stack" aria-label="Technologies used">
                {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </div>

            <div className="project-detail">
                <h4>What it does</h4>
                <ul className="project-list">
                    {project.features.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="project-engineering">
                <h4>Engineering focus</h4>
                <p>{project.engineering}</p>
            </div>

            <div className="project-actions">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-button github"
                    >
                        Source code <span aria-hidden="true">↗</span>
                    </a>
                )}
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-button live"
                    >
                        Live demo <span aria-hidden="true">↗</span>
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
