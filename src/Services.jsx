/*
* 
* Jasper Belenzo
* 301329283
*
*/
import { Link } from 'react-router-dom'

export default function Services(){
    return (<>
        <div class="container">
            <div class="row">
                <div class="span7">
                <h1>Professional Services</h1>
                <p>Below are some of services that I can offer and provide:</p>
                <br />
                <h4>Enterprise Java Web Application and Information Systems Development</h4>
                <p>Technology stack: Java EE, SPRING, Ext JS, Angular, Hibernate, Oracle, MongoDB, Tomcat, AWS</p>
                <br />
                <h4>Web-based GIS Development</h4>
                <p>Technology Stack: Leaflet JS, GeoServer, ESRI, GeoTools, PostGIS, QGIS, OpenStreetMap, Google Maps</p>
                <br />
                <h4>Mobile Application Development</h4>
                <p>Technology stack: J2ME, Android Java, Android Kotlin, React Native</p>
                <br />
                <h4>Salesforce Cloud Development and Integration</h4>
                <p>Technology Stack: Salesforce Cloud, Spring Boot, Java Web Services (SOAP XML and RESTful)</p>
                <br />
                <h4>Cloud Native Application Development and Migration</h4>
                <p>Technology stack: Java EE, SPRING Boot, Docker, AWS, Heroku</p>
                <br />
                <h4>Relational Database Design, Development, Management and Administration</h4>
                <p>Technology Stack: Oracle, Toad, Oracle PL/SQL, PostgreSQL, pg/SQL, SQL Developer</p>
                <br />
                <h4>Custom Development of OUAF based Application Products</h4>
                <p>Technology stack: Oracle Utilities Application Framework, Hibernate, Java, Oracle Cloud</p>
                <br />
                <h4>Custom Development of INFOR Lawson System Foundation based Application Products</h4>
                <p>Technology stack: INFOR Lawson System Foundation, Java, C#, WebSphere, DB2</p>
                <br />
                <h4>Automated Testing, RPA, and CI/CD </h4>
                <p>Technology stack: Selenium, UFT, Blue Prism, Jenkins</p>
                <br />
            </div>
            <div class="span5">
                <img src="jasper_belle.jpg" />
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="span3">
                <p>I'm a <a href="https://bcert.me/bc/html/show-badge.html?b=ieesblli" target="_blank">SPRING Certified Professional</a>!</p>
                <img src="spring-certified-professional.png" />
            </div>
            <div class="span3">
            <p>I'm an <a href="https://www.credly.com/badges/b1276895-d417-45a7-af7d-c428bf1447a7" target="_blank">AWS Certified Solutions Architect</a>!</p>
                <img src="aws-csaa.png" />
            </div>
            <div class="span3">
            <p>I'm an <a href="https://www.credly.com/badges/b2b2a167-a5f2-45ad-8a18-075aeee253e7" target="_blank">AWS Certified Solutions Architect</a>!</p>
                <img src="oce-jee6wsd.png" />
            </div>
            <div class="span3">
                <p>I'm an old school <a href="https://www.mapua.edu.ph/" target="_blank">Mapúa</a> alumni.</p>
                <img src="mapua_cs.png" />
            </div>
        </div>
            <hr />
            <footer>
                <p>&copy; Jasper Belenzo - <a rel="me" href="https://www.facebook.com/leafdance"> https://www.facebook.com/leafdance</a></p>    
            </footer>
        </div>
            </>)
}