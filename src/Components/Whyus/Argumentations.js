import React from 'react';
import styled from 'styled-components'
import Slide from 'react-reveal/Slide'
import Flip from 'react-reveal/Flip';
import Fade from "react-reveal/Fade";
function Argumentations(props) {
    return (
        <Container>
            <Fade left>
                <Wrap>
                    <img src="/images/handshake.png" alt=""/>
                    <span>We Get You</span>
                    <p>
                        Starting as entrepreneurs ourselves, Digital Fuel listens to your needs carefully. We are flexible, accommodating, and understanding of the small business desires and the big picture dreams. Using online strategy, startup growth hacking, and eCommerce, we have the kind of expertise that keeps your brand integrity intact while building you the customer base that you want.
                    </p>
                </Wrap>
            </Fade>

            <Flip top>
                <Wrap>
                    <img src="/images/rocket.png" alt=""/>
                    <span>We Build You Up</span>
                    <p>
                        we are the first to invest in new tools that later become staples of the industry. We have insight from the past and foresight about the future that will constantly evolve your business to new heights.
                    </p>
                </Wrap>
            </Flip>

                <Slide bottom>
                    <Wrap>
                        <img src="/images/smile.png" alt=""/>
                        <span>We Deliver Results</span>
                        <p>
                            With Acquisition and Retention Marketing tactics, we want to invest your time and your money into customers that come back. Making sure nothing falls through the cracks, we carefully watch over every step of our strategy from click to conversion.
                        </p>
                    </Wrap>
                </Slide>


            <Fade right>
                <Wrap>
                    <img src="/images/give-love.png" alt=""/>
                    <span>We Care About You</span>
                    <p>
                        As a company filled with young and connected people, we know how to keep your company relevant in the day to day. Have someone in-the-know in charge of your brand’s public image — choose DIGITAL FUEL.
                    </p>
                </Wrap>
            </Fade>


        </Container>
    );
}

export default Argumentations;

//#region Styling

const Container=styled.div`
  display:grid;
  margin-top:1vh;
  grid-template-columns:repeat(4, minmax(0, 1fr));
  grid-gap:10px;
  z-index: 1;

  @media screen and (min-width: 1024px) and (max-width: 1351px)
  {
    grid-template-columns:repeat(2, minmax(0, 1fr));
  }
  @media screen and (min-width: 900px) and (max-width: 1024px)
  {
    grid-template-columns:repeat(2, minmax(0, 1fr));
  }
  @media screen and (min-width: 768px) and (max-width: 900px)
  {
    grid-template-columns:repeat(2, minmax(0, 1fr));
  }
`
const Wrap=styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    width: 22vw;
    align-items: center;
    overflow-x: hidden;
    background-color: RGB(10, 27, 70);
    border-radius: 10px;
    padding: 10px 20px;
    margin-left: 20px;
    box-shadow:rgb(0 0 0 / 69%) 0 15px 30px -10px, rgb(0 0 0 / 50%) 0px 16px 2px -20px;
    border:2px solid #3b486b;
    transition-duration: 1s;
  img
  {
    width: 4vw;
    height: 8vh;
    margin-top: 1vh;
  }
  span{
    color:white;
    font-size: 18px;
    background-color: rgba(242,242,242,0.3);
    padding: 10px 10px;
    border-radius: 10px;
    margin-top: 1vh;
  }
  p{
    color: white;
    text-align: justify;
    line-height: 30px;
    margin-top: 1vh;
  }
  &:hover
  {
    box-shadow:rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transition-duration:1s;
    border: 2px solid white;
  }

  @media screen and (min-width: 1024px) and (max-width: 1351px)
  {
    &{
      width: 45vw;
    }
    img{
      width: 10vw;
      height: 10vh;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1024px)
  {
    &{
      width: 45vw;
    }
    img{
      width: 10vw;
      height: 10vh;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 900px)
  {
    &{
      width: 45vw;
      //margin-right: 12vh;
      margin-left: 1vh;
      //grid-gap: 15px;
    }
    img{
      width: 10vw;
      height: 10vh;
    }
  }
  
  `
//#endregion


