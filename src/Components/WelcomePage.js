import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
function WelcomePage() {
    return (
        <Container id="homepage">
             <Welcome>
                <Fade left>
                    <TextTop>
                        DIGITAL FUEL
                    </TextTop>
                </Fade>
                 <Fade right>
                     <Devider>With US</Devider>
                 </Fade>

                    <Flip top>
                        <DescText>
                            You can make your brands FLY by perfect team and good services.
                        </DescText>
                    </Flip>
                    <ArrowBtn src="/images/down-arrow.svg"/>
            </Welcome>
            
        </Container>
    )
}

export default WelcomePage


//#region Styling
const Container= styled.div`
    display:flex;
    justify-content:center;
    width: 100vw;
    height:100vh; 
    background-image:url("/images/background.jpg");
    background-position:center;
    background-size: cover;
    background-attachment: fixed;
`
const Welcome=styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    position:relative;
`
const TextTop=styled.div`
    display:flex;
    letter-spacing:2px;
    align-items:center;
    //font-weight:600;
    color:white;
    text-transform:uppercase;
    font:bold 100px/90px cursive; // short form for Font Attribute
    margin:0;
    padding:0;
    font-family: 'Bebas Neue', cursive;
  

`
const DescText=styled(TextTop)`
    font:600 40px/56px cursive;
    text-align:center;
    margin-bottom:20px;
    font-family: 'Bebas Neue', cursive;
  
  @media screen and (max-width:900px) and (min-width:500px)
  {
    font-size: 30px;
  }
`
const ArrowBtn=styled.img`
position:absolute;
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
overflow-y:hidden;
bottom:5px;
`
const Devider=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-left:10px;
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