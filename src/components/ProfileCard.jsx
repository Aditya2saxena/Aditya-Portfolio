function ProfileCard({profile}){

    return (

        <article className="profile-card reveal">


            <div className="profile-header">

                <h3>
                    {profile.name}
                </h3>

                <span>
                    ↗
                </span>

            </div>


            <p>
                {profile.description}
            </p>


            <a 
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="profile-button"
            >
                Visit {profile.name}
            </a>


        </article>

    );

}


export default ProfileCard;
