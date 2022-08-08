import React from 'react';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade';
function ContactForm(props) {
    return (
        <Container>
            <div id="form">
                <form id="waterform" method="post">
                    <Fade top>
                        <div className="formgroup" id="name-form">
                            <label htmlFor="name">Your name*</label>
                            <input type="text" id="name" name="name"/>
                        </div>

                        <div className="formgroup" id="email-form">
                            <label htmlFor="email">Your e-mail*</label>
                            <input type="email" id="email" name="email"/>
                        </div>

                        <div className="formgroup" id="message-form">
                            <label htmlFor="message">Your message</label>
                            <textarea id="message" name="message"/>
                        </div>
                    </Fade>

                    <Slide bottom>
                        <input type="submit" value="Send your message!"/>
                    </Slide>

                </form>
            </div>
        </Container>
    );
}

export default ContactForm;

const Container=styled.div`
    overflow: hidden;
    z-index: 1;



`