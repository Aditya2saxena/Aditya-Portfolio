import { useEffect, useState } from "react";

import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import SkillCard from "./components/SkillCard";

import {
    certifications,
    codingProfiles,
    contactLinks,
    heroRoles,
    navItems,
    primaryEmail,
    projects,
    skillGroups,
    stats,
} from "./portfolioData";


function App() {

    const [
        menuOpen,
        setMenuOpen
    ] = useState(false);


    const [
        activeSection,
        setActiveSection
    ] = useState("home");


    const [
        scrollProgress,
        setScrollProgress
    ] = useState(0);


    const [
        isScrolled,
        setIsScrolled
    ] = useState(false);


    const [
        roleIndex,
        setRoleIndex
    ] = useState(0);


    const [
        formState,
        setFormState
    ] = useState("idle");



    useEffect(()=>{

        const roleTimer = window.setInterval(()=>{

            setRoleIndex(
                current =>
                (current + 1) % heroRoles.length
            );

        },2200);


        return ()=>window.clearInterval(roleTimer);


    },[]);



    useEffect(()=>{

        const revealItems =
        document.querySelectorAll(".reveal");


        const observer =
        new IntersectionObserver(

            (entries,observer)=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold:0.16
            }

        );



        revealItems.forEach(
            item=>observer.observe(item)
        );


        return ()=>observer.disconnect();


    },[]);




    useEffect(()=>{


        const handleScroll=()=>{


            const scrollTop =
            window.scrollY;


            const docHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;



            setScrollProgress(
                docHeight>0
                ?
                (scrollTop/docHeight)*100
                :
                0
            );


            setIsScrolled(
                scrollTop>40
            );



            const sections =
            document.querySelectorAll(
                "main section[id]"
            );


            let currentId="home";



            sections.forEach(section=>{

                if(
                    scrollTop >=
                    section.offsetTop - 140
                ){

                    currentId =
                    section.id;

                }

            });



            setActiveSection(currentId);


        };



        handleScroll();



        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive:true
            }
        );



        return ()=>{

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };


    },[]);




    useEffect(()=>{


        document.body.style.overflow =
        menuOpen
        ?
        "hidden"
        :
        "";



        const handleKeyDown=(event)=>{

            if(event.key==="Escape"){

                setMenuOpen(false);

            }

        };



        window.addEventListener(
            "keydown",
            handleKeyDown
        );



        return ()=>{

            document.body.style.overflow="";


            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };


    },[menuOpen]);




    const closeMenu=()=>{

        setMenuOpen(false);

    };



    const handleSubmit=(event)=>{

        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const subject = formData.get("subject");
        const body = [
            `Name: ${formData.get("name")}`,
            `Email: ${formData.get("email")}`,
            "",
            formData.get("message")
        ].join("\n");

        setFormState("email-opened");
        window.location.href = `mailto:${primaryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    };



    return (

    <>


        <div

            className="scroll-progress"

            style={{
                width:`${scrollProgress}%`
            }}

        />



        <header

            className={
                `header ${
                    isScrolled
                    ?
                    "is-scrolled"
                    :
                    ""
                }`
            }

            id="top"

        >


            <a

                href="#home"

                className="logo"

                onClick={closeMenu}

            >

                <span className="logo-mark">
                    AS
                </span>


                <span className="logo-text">
                    Aditya Saxena
                </span>


            </a>



            <button

                className={
                    `menu-toggle ${
                        menuOpen
                        ?
                        "is-open"
                        :
                        ""
                    }`
                }

                type="button"

                onClick={()=>
                    setMenuOpen(
                        current=>!current
                    )
                }

            >

                <span/>

                <span/>


            </button>



            <nav

                className={
                    `navbar ${
                        menuOpen
                        ?
                        "is-open"
                        :
                        ""
                    }`
                }

            >


            {
                navItems.map(
                    ([id,label])=>(

                    <a

                        key={id}

                        href={`#${id}`}

                        className={
                            activeSection===id
                            ?
                            "active"
                            :
                            ""
                        }

                        onClick={closeMenu}

                    >

                        {label}

                    </a>

                    )
                )
            }


            </nav>



        </header>
        {menuOpen && (
    <div 
        className="nav-backdrop"
        onClick={closeMenu}
    />
)}


<main>


<section 
    className="hero section" 
    id="home"
>


<div className="hero-backdrop">

    <span className="orb orb-one"/>

    <span className="orb orb-two"/>

</div>



<div className="hero-copy reveal">


<p className="eyebrow">
    Aditya Saxena · Software developer
</p>



<h1>
    Early-career software developer focused on reliable web applications.
</h1>



<p className="hero-text">

    Focused on backend engineering, practical product interfaces,
    and dependable data-driven applications.

</p>



<div className="developer-status">

    <span></span>

    Open to entry-level software developer roles

</div>



<div className="hero-roles">

    <span>
        Focused on
    </span>


    <strong 
        key={roleIndex}
        className="role-text"
    >

        {heroRoles[roleIndex]}

    </strong>


</div>




<div className="hero-actions">


<a
href="#projects"
className="button button-primary"
>
View Projects
</a>



<a

href="/assets/Aditya-updated-resume.docx"

download

className="button button-secondary"

>

Download Resume

</a>




<a

href="#contact"

className="button button-ghost"

>

Contact Me

</a>


</div>





<div className="social-links">


<a

href="https://github.com/Aditya2saxena"

target="_blank"

rel="noreferrer"

>

GitHub

</a>



<a

href="https://www.linkedin.com/in/aditya-saxena-00bba4296/"

target="_blank"

rel="noreferrer"

>

LinkedIn

</a>




<a href={`mailto:${primaryEmail}`}>

Email

</a>



<a href="#profiles">

LeetCode

</a>



</div>



</div>






<aside className="hero-panel reveal">



<div className="hero-portrait">


<div className="image-glow"></div>



<img

src="/assets/profile.png"

alt="Aditya Saxena"

loading="eager"

fetchPriority="high"

 />




<div className="floating-tags">


<span>
React
</span>


<span>
Node.js
</span>


<span>
Java
</span>


<span>
MongoDB
</span>


</div>



</div>




<div className="portrait-caption">
    <span>Aditya Saxena</span>
    <span>Full-stack development · Backend systems</span>
</div>


<div className="hero-panel-card">


<p className="eyebrow">Currently focused on</p>
<div className="profile-focus-list">
    <span>Full-stack product development</span>
    <span>Backend APIs and data systems</span>
    <span>Java · JavaScript · React · Node.js</span>
</div>


</div>



</aside>



</section>






<section 
className="section"
id="about"
>



<SectionHeading

eyebrow="About"

title="Early-career developer focused on software development."

description="I build practical web applications and backend systems, and I am growing my career through hands-on software development."

/>





<div className="about-layout">


<article className="about-card reveal">


<h3>

Background

</h3>



<p>

I build full-stack applications with
React, Node.js, Express, MongoDB, and MySQL. I care about
clear interfaces, dependable APIs, and maintainable code.

</p>



<p>

My recent work includes a real-time stock portfolio tracker,
a property listing platform, and an event-sourced task system.
Each project has helped me explore a different part of application design.

</p>



<p>

I am looking for an entry-level software developer role where
I can contribute to a team and continue growing as an engineer.

</p>



</article>





<div className="stats-grid">


{
stats.map((stat)=>(

<article

className="stat-card reveal"

key={stat.label}

>


<strong>

{stat.value}

</strong>



<span>

{stat.label}

</span>


</article>


))

}


</div>



</div>


</section>
<section 
className="section" 
id="skills"
>


<SectionHeading

eyebrow="Skills"

title="Technical skills and tools used for building modern applications."

description="A practical technology stack covering frontend development, backend engineering, databases, programming languages, and software development tools."

/>



<div className="skills-grid skills-grid-large">


{
skillGroups.map((group)=>(

<SkillCard

key={group.title}

title={group.title}

icon={group.icon}

items={group.items}

/>


))

}


</div>



</section>





<section 
className="section" 
id="projects"
>


<SectionHeading

eyebrow="Projects"

title="Selected work, with the engineering behind it."

description="Three projects exploring live market data, property listings, and event-driven backend design. Open a demo or repository to see the implementation."

/>





<div className="projects-grid projects-grid-large">


{
projects.map((project, index)=>(


<ProjectCard

key={project.title}

project={project}

index={index}

/>


))

}


</div>




</section>






<section 
className="section" 
id="certifications"
>


<SectionHeading

eyebrow="Certifications"

title="Professional learning and technical certifications."

description="Certifications that represent continuous learning across software development, technical skills, and professional growth."

/>




<div className="certifications-grid">


{
certifications.map((certificate)=>(


<article

className="cert-card reveal"

key={
typeof certificate === "object"
?
certificate.title
:
certificate
}

>


<span className="cert-badge">

Verified

</span>




{
typeof certificate === "object"
?

<>

<h3>

{certificate.title}

</h3>


<p>

{certificate.issuer}

</p>


<small>

{certificate.type}

</small>


</>

:

<h3>

{certificate}

</h3>

}



</article>


))

}


</div>




</section>






<section 
className="section" 
id="profiles"
>


<SectionHeading

eyebrow="Coding Profiles"

title="Programming practice and developer presence."

description="Links to my coding platforms, repositories, and problem-solving activity."

/>





<div className="profiles-grid">


{
codingProfiles.map((profile)=>(


<ProfileCard

key={profile.name}

profile={profile}

/>


))

}


</div>




</section>
<section 
className="section contact-section" 
id="contact"
>


<SectionHeading

eyebrow="Contact"

title="Let's build something impactful together."

description="Interested in software development, technical collaboration, or innovative product ideas? Feel free to connect and start a conversation."

/>




<div className="contact-layout">



<article className="contact-panel reveal">


<div className="contact-status">

<span></span>

    Open to entry-level software developer roles

</div>



<h3>

Contact Information

</h3>




<div className="contact-info-list">


{
contactLinks.map((item)=>(


<div

className="contact-info-row"

key={item.label}

>


<span>

{item.label}

</span>



{
item.href ?

<a

href={item.href}

target={
item.href.startsWith("http")
?
"_blank"
:
undefined
}

rel={
item.href.startsWith("http")
?
"noreferrer"
:
undefined
}

>

{item.value}

</a>


:

<strong>

{item.value}

</strong>

}



</div>



))

}



</div>



</article>






<form

className="contact-form reveal"

onSubmit={handleSubmit}

>


<h3>

Send a Message

</h3>



<label>

<span>

Full Name

</span>


<input

type="text"

name="name"

placeholder="Your full name"

required

/>

</label>




<label>

<span>

Email Address

</span>


<input

type="email"

name="email"

placeholder="your.email@example.com"

required

/>

</label>




<label>

<span>

Subject

</span>


<input

type="text"

name="subject"

placeholder="Project collaboration, technical discussion"

required

/>

</label>





<label>

<span>

Message

</span>



<textarea

rows="5"

name="message"

placeholder="Write your message, project idea, or collaboration details..."

required

/>

</label>





<button

type="submit"

className="button button-primary"

data-state={formState}

>


{
formState==="email-opened"

?

"Opening Email App…"

:

"Prepare Email"

}



</button>



<p className="form-note" aria-live="polite">

{formState === "email-opened"
    ? "Your email app should open with this message filled in. Review and send it there."
    : "Prepare an email with your details. You can review it before sending."}

</p>



</form>



</div>




</section>



</main>






<footer className="footer">


<p>

Designed and developed by Aditya Saxena using React.js

</p>



<a href="#top">

Back to top

</a>



</footer>



</>

);

}


export default App;
