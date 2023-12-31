import { WorkWrapper } from "./works.style"
import { WorkCard } from "../../Components"

const projectIntro_raneblog = 
<p>
Every time when I see a cool design, I just can’t help applying that to my own site. 
<br/>This website design has been changing constantly not only to keep up with my design pursuit but also honing my web development and design skills.
<br/>It’s a static website using React as the framework and deployed to aws s3 for hosting.
</p>


export function Works(){
    return (
        <WorkWrapper >
            <h1>Works</h1>
            <div className="WorkCardsList">
                <WorkCard
                    name="Rane Blog Project"
                    duration="2021.10 ~"
                    tags={["react", "javascript", "aws"]}
                    githubLink="https://github.com/kisaragiRY/Rane-Blog/tree/main"
                    websiteLink="http://ranelog.com"
                    projectIntro={projectIntro_raneblog}
                />
                <WorkCard 
                    name="Dentate Gyrus Project"
                    duration="2021.10 ~ 2023.9"
                    tags={['python', 'docker', 'machine learning']}
                />
            </div>
        </WorkWrapper >
    )
}