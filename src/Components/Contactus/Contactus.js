import React from 'react';
import styled from 'styled-components'
import ContactForm from './ContactForm'
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide'
function Contactus(props) {
    return (
        <Container id="Contactus">
            <Roll left>
                <img src="/images/hero-img.png" alt=""/>
            </Roll>

            <Wrap>
                <Slide top>
                    <p id="letus">Let us hear about your project</p>
                </Slide>
                <Roll Bottom>
                    <ContactForm />
                </Roll>

            </Wrap>
        </Container>
    );
}

export default Contactus;

const Container=styled.div`
  display: flex;
  z-index: 1;
  //align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/download.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #0a1b46;
  overflow: hidden;
  img{
    //justify-items: center;
    align-self: center;
    height: 60vh;
  }
  @media screen and (min-width: 1024px) and (max-width: 1351px)
  {
    img{
      //justify-items: center;
      display: none;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1024px)
  {
    img{
      //justify-items: center;
      display: none;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 900px)
  {
    img{
      //justify-items: center;
     display: none;
    }
  }
`
const Wrap=styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #letus{
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-size: 60px;
    align-items: center;
  }
 
`
