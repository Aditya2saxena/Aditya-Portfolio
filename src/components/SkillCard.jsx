function SkillCard({ title, items }) {
    return (
        <article className="skill-card reveal">
            <div className="skill-card-top">
                <h3>{title}</h3>
                <span className="skill-indicator" aria-hidden="true" />
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={item}>
                        <span>{item}</span>
                        <div className="skill-progress-track" aria-hidden="true">
                            <div className="skill-progress-fill" style={{ width: `${72 + (index % 4) * 7}%` }} />
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default SkillCard;
