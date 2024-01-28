/*
* 
* Jasper Belenzo
* 301329283
*
*/
import { Link } from 'react-router-dom'
export default function Projects(){
    return (<>
        <div class="container">
            <div class="row">
                <div class="span7">
                <h1>Projects</h1>
                <p>Hola niños y niñas! My name is Jasper Lunaria Belenzo, I'm from the Philippines. 
                    I'm a software engineer,  a self proclaimed, loving Husband, a father of two, a former Researcher, 
                    a former Lecturer, a frustrated, multi-instrument Musician and this is my personal website.</p>
                <p>In the future, I aim to start my own company and name it BELENZO Softwares. 
                    As of now I'm studying in Canada. Prior to coming to Canada, I have developed enterprise web applications and 
                    information systems using Java EE and Spring for organizations such as Prudential Financial, Hewlett Packard Enterprise, 
                    Procter & Gamble, JPMorgan Chase & Co., and the Asian Development Bank in a span of a decade or more.</p>
                <p>I have also contributed to the development of Enterprise Resource Planning (ERP) Software Products for INFOR and ORACLE Corporation. 
                    I have some Web GIS Research and Development experience and a bit of academic teaching experience as a University Lecturer. 
                    In my free time I enjoying studying and playing musical instruments such as Guitars, Basses, Keyboards and Electronic Drums. 
                    I have interests in some Sports such as Basketball and Soccer (Football) as these are the Sports that I was able to play when I was younger.
                </p>
                <h4>Resume / Curriculum Vitae</h4>
                <p>Check out a 2021 PDF copy of <a href="/jlbelenzo-cv-resume.pdf">my Resume/CV by clicking here</a>. Check out the following links to 
                    know more <Link to="/about">About Me</Link>, and the <Link to="/services">Services</Link> I can provide, and the <Link to="/projects">Projects</Link> that
                        I have completed for my clients. Check out my <Link to="/qualifications">Qualifications</Link> too and of how to reach and <Link to="/contact">Contact me</Link>.
                </p>
            </div>
                <div class="span5">
                    <img src="jasper_yana_go_train.jpg" />
                </div>
            </div>
        <hr />
        <div class="row">
            <div class="span3">
                <p>Surprisingly, I now have a <a href="https://github.com/leafdance" target="_blank">Github account</a>.</p>
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