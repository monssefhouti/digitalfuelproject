import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide'
import Flip from 'react-reveal/Flip';
import Fade from "react-reveal/Fade";
function Whyus() {
    return (
        <Container>
            <Wrap>
                <Fade right>
                    <Devider>why digital fuel ?</Devider>
                </Fade>

            </Wrap>
        </Container>
    )
}

export default Whyus

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/download.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #0a1b46;
`
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font:bold 50px/100px cursive;
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