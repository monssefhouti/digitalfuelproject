import React from 'react' //rsf
import WelcomePage from './WelcomePage'
import Notice from "./Notice";
import Services from "./Services/Services";
import FeedbackRSS from "./FeedbackRSS";
import Whyus from "./Whyus/Whyus";
import StartWithUs from "./StartWithUs";
import Contactus from "./Contactus/Contactus";
import Footer from "./Footer/Footer";
function Homepage() {
    return (
        <div>
           <WelcomePage />
            <Notice />
            <Services />
            <FeedbackRSS />
            <Whyus />
            <StartWithUs />
            <Contactus />
            <Footer/>
        </div>
    )
}

export default Homepage


