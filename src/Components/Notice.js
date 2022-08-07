import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import LightSpeed from 'react-reveal/LightSpeed'
import Slide from 'react-reveal/Slide'
function Notice() {
    return (
        <Container>

            <Wrap>
                <Slide top>
                    <Devider>giving the change to</Devider>
                </Slide>

                <LightSpeed left>
                    <p>
                        Make yourself known and generate new customers! With a                              professional team
                    </p>
                </LightSpeed>

                <Fade bottom>
                    <img src="/images/slider-7.png"/>
                </Fade>

            </Wrap>
            <ArrowBtn src="/images/down-arrow.svg"/>
        </Container>
    )
}

export default Notice

//#region Styling

const Container=styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 105vh;
  overflow-x: hidden;
  position: relative;
  background-image: url("/images/pattern_background.png");
  background-attachment: fixed;
  background-color: #081945;
`

const Wrap=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    font-size: 60px;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    width: 40vw;
    color: white;
    font-weight: 600;

    @media screen and (max-width:1024px) and (min-width:600px)
    {
      font-size: 45px;
    }
    
  }
  img{
    height: 60vh;

    @media screen and (max-width:1024px) and (min-width:600px)
    {
      height: 45vh;
    }
  }
`
const ArrowBtn=styled.img`
    position:absolute;
    height:40px;
    animation:animateDown infinite 1.5s;
    overflow-x:hidden;
    overflow-y:hidden;
    bottom: 5px;

    @media screen and (max-width:1024px) and (min-width:600px)
    {
      height:30px;
    }
    
`
//#region Devider
const Devider=styled.div`
  font:600 40px/30px cursive;
  text-align:center;
  margin-bottom:20px;
  font-family: 'Bebas Neue', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left:20px;
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
//#endregion
//#endregion