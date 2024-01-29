/*
* 
* Jasper Belenzo
* 301329283
*
*/
import { Link } from 'react-router-dom'

export default function Contact(){
    return (<>
        <div class="container">
            <div class="row">
                <div class="span7">
                <h1>Contact Me</h1>
                <p>Contact me through the Contact Form provided below.</p>
                <br />
                <h4>Contact Form</h4>
                    <form action="/">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." maxlength="50" size="50"></input>
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                        <label for="lname">Email</label>
                        <input type="text" id="email" name="email" placeholder="Your email.."></input>
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write your message here" rows="5" cols="100"></textarea>
                        <br/ >
                        <input type="submit" value="Submit"></input>
                    </form>
                <p>I could also be reached through my email at " jasper dot belenzo @ outlook dot com " and additionally I can also be reach through my LinkedIn, Facebook and all other Social Media channels shown below: </p>
            </div>
            <div class="span5">
                    <img src="jasper_james_Jane.jpg" />
                </div>
            </div>
            <hr />
            <div class="row">
                <div class="span3">
                    <p>I'm on Facebook because Twitter is boring! <a href="https://www.facebook.com/leafdance" target="_blank">https://www.facebook.com/leafdance</a></p>
                    <img src="twitter.jpg" />
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
                    <p>Surprisingly, I now have a <a href="https://github.com/leafdance" target="_blank">Github account</a>.</p>
                    <img src="github-octocat.png" />
                </div>
            </div>
            <hr />

            <footer>
                <p>&copy; Jasper Belenzo - <a rel="me" href="https://www.facebook.com/leafdance"> https://www.facebook.com/leafdance</a></p>    
            </footer>
        </div>
            </>)
}