/*
* 
* Jasper Belenzo
* 301329283
*
*/
import { Link } from 'react-router-dom'
export default function Home() {
    return (<>
<div class="container">
    <div class="row">
        <div class="span7">
        <h1>Jasper Belenzo</h1>
        <p>Hola niños y niñas! My name is Jasper Lunaria Belenzo, I'm from the Philippines. 
            I'm a software engineer,  a self proclaimed, loving Husband, a father of two, a former Researcher, 
            a former Lecturer, a frustrated, multi-instrument Musician, and this is my personal website.</p>
        <h4>Mission Statements</h4>
        <p>As a current Software Engineering student, I aim to further enhance and improve as a Software Engineer. I aim to update
            my web application development skills to include Express JS and Node JS, learn mobile application development using Android (Kotlin, Java)
            and React Native, and learn A.I. Engineering and Cloud based DevOps.
        </p>
        <p>I aim to discover and reach my full potential as Software Engineer and to constantly update my technical skillsets to adapt to
            the ever evolving demands of the IT and software development industry. As a newcomer to Canada, I also aim to establish my family in
            Canada, I aim to help and give them the best possible future in Canada.
        </p>
        <h4>Resume / Curriculum Vitae</h4>
        <p>Check out a 2021 PDF copy of <a href="/jlbelenzo-cv-resume.pdf">my Resume/CV by clicking here</a>. Check out the following links to 
        know more <Link to="/about">About Me</Link>, and the <Link to="/services">Services</Link> I can provide, and the <Link to="/projects">Projects</Link> that
        I have completed for my clients. Check out my <Link to="/qualifications">Qualifications</Link> too and of how to reach and <Link to="/contact">Contact me</Link>.
        </p>
    </div>
        <div class="span5">
            <img src="CustomLogo.png" />
        </div>
    </div>
<hr />
<div class="row">
    <div class="span3">
        <p>Surprisingly, I now have a <a href="https://github.com/leafdance" target="_blank">Github account</a>.
    </p>
        <img src="github-octocat.png" />
    </div>
    <div class="span3">
        <p>Hire me! Check <a href="https://www.linkedin.com/in/belenzo/" target="_blank">my resume on LinkedIn</a>.</p>
        <img src="linkedin.png" />
    </div>
    <div class="span3">
        <p>Waste precious minutes of your life, watch: <a href="https://www.youtube.com/@kagemane10" target="_blank">https://www.youtube.com/@kagemane10</a></p>
        <img src="youtube.jpg" />
    </div>
    <div class="span3">
        <p>I'm on Facebook because Twitter is boring! <a href="https://www.facebook.com/leafdance" target="_blank">https://www.facebook.com/leafdance</a></p>
        <img src="twitter.jpg" />
    </div>
</div>
    <hr />
    <footer>
        <p>&copy; Jasper Belenzo - <a rel="me" href="https://www.facebook.com/leafdance"> https://www.facebook.com/leafdance</a></p>    
    </footer>
</div>
    </>)
}