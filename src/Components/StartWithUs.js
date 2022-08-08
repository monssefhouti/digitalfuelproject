import React from 'react';
import styled from 'styled-components'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade';
function StartWithUs(props) {
    return (
        <Container>
            <Fade right>
                <Slide top>
                 <span id="getready">
               Ready to Get Started?
            </span>
                </Slide>

                <Wrap>
                    <Fade left>
                        <p id="Start">
                            Your success with us start here !
                        </p>
                    </Fade>
                    <Slide bottom>
                    <span id="keepup">
                    Keep up with us
                </span>
                    </Slide>

                </Wrap>
            </Fade>

        </Container>
    );
}

export default StartWithUs;

//#region Styling
const Container=styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 30vh;
  z-index: 1;
  background-image: url("/images/starting.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  
  #getready{
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-size: 100px;
    margin-top: 2vh;
    @media screen and (min-width: 768px) and (max-width: 900px)
    {
     &{
       font-size: 70px;
     }
    }
  }
`
const Wrap=styled.div `
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  z-index: 1;
  #Start{
    color: white;
    background-color: red;
    padding: 18px 38px;
    //box-shadow:rgb(0 0 0 / 69%) 0 15px 30px -10px, rgb(0 0 0 / 50%) 0px 16px 2px -20px;
    box-shadow: -2px -9px 17px 1px rgba(255,255,255,0.63);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 8px;
    cursor: pointer;
    transition-duration: 1s;
    &:hover
    {
      background-color: #a30000;
    }
  }
  #keepup
  {
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-size: 40px;
    margin-bottom: 2vh;
  }
  
`
//#endregion
