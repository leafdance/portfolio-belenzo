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
                <h1>Software Projects</h1>
                <p>Below are some of my clients and the software projects I have contriuted to:</p>
                <br />
                <h3>Prudential Financial</h3>
                <h4>Prudential Online</h4>
                <p>Other Software Projects with Prudential Financial: LifePortal, Producer Services, Universal Viewing Capability</p>
                <img src="prudential.png" />
                <br />
                <br />
                <h3>JPMorgan Chase & Co.</h3>
                <h4>JPMorgan MORCOM Prime Portal</h4>
                <p>Other Software Projects with JPMorgan Chase & Co.: MoneyTransfer, Account Management Systems (AMS) Customy, ORCA, AFrame, IM</p>
                <img src="manage-funds.png" />
                <br />
                <br />
                <h3>ORACLE Corporation</h3>
                <h4>Oracle Utilities Application Framework (OUAF)</h4>
                <p>Other Software Projects developed using OUAF: ORACLE Enterprise Taxation and Policy Management, ORACLE Customer Care and Billing</p>
                <img src="OUAF.jpg" />
                <br />
                <br />
                <h3>INFOR Lawson</h3>
                <h4>INFOR Lawson System Foundation</h4>
                <p>Other Software Projects developed using INFOR Lawson System Foundation: INFOR Lawson S3, INFOR Lawson M3</p>
                <img src="Infor-Lawson.png" />
                <br />
                <br />
            </div>
            <div class="span5">
                <img src="jasper_yana_go_train.jpg" />
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