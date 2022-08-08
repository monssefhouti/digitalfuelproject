import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide'
import Fade from "react-reveal/Fade";
import Argumentations from "./Argumentations";
function Whyus() {
    return (
        <Container>
            <Wrap>
                <Fade right>
                    <Devider>why digital fuel ?</Devider>
                </Fade>

            </Wrap>
            <Slide left>
                <Argumentations />
            </Slide>

            <ArrowBtn src="/images/down-arrow.svg"/>
        </Container>
    )
}

export default Whyus

//#region Styling
const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: url("/images/download.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #0a1b46;
  overflow-x: hidden;
  z-index:1;
  position: relative;
  @media screen and (min-width: 1024px) and (max-width: 1351px)
  {
    height: 115vh;
  }
  @media screen and (min-width: 900px) and (max-width: 1024px)
  {
    height: 125vh;
  }
  @media screen and (min-width: 768px) and (max-width: 900px)
  {
    height: 130vh;
  }
`
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font:bold 50px/20vh cursive;
`
const Devider=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left:10px;
    font-family: 'Bebas Neue', cursive;
    text-transform:uppercase;
    letter-spacing:5px;
    color: white;
&:before,&:after
{
  content: '';
  display: flex;
  height: 2px;
  width: 10vw;
}
&::before {
  background-color: red;
  margin-right: 1vw;
    }

&::after {
  background-color: red;
  margin-left: 1vw;

}
`
const ArrowBtn=styled.img`
position:absolute;
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
overflow-y:hidden;
bottom: 5px;
left: 50%;
right: 53%;

@media screen and (max-width:1024px) and (min-width:600px)
{
    height:30px;
    left: 50%;
    right: 50%;
    bottom: 5px;
}
  
  `
//#endregion