function SkillCard({ title, items }) {
    return (
        <article className="skill-card reveal">
            <div className="skill-card-top">
                <h3>{title}</h3>
                <span className="skill-indicator" aria-hidden="true" />
            </div>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    );
}

export default SkillCard;
