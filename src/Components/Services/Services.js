import React from 'react';
import styled from 'styled-components'
import Slide from 'react-reveal/Slide'
import Flip from 'react-reveal/Flip';
import ServicesBlocs from './ServicesBlocs';
function Services() {
    return (
        <Container>
            <Slide top>
                <Devider>our services</Devider>
            </Slide>
            <Flip bottom>
                <Wrap>
                    <p>
                        Do you want to launch a 360 ° national or international project ? <br/><span>We put our expertise at your service.</span>
                    </p>
                </Wrap>
            </Flip>

            <ServicesBlocs />
            <ArrowBtn src="/images/down-arrow.svg"/>
        </Container>
    );
}

export default Services;

const Container=styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/download.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #0a1b46;
  //overflow-x: hidden;
  
  @media screen and (max-width:1373px) and (min-width:1067px)
  {
    //1373
    height: 117vh;
  }
  @media screen and (max-width:1067px) and (min-width:1000px)
  {
    //1373
    height: 115vh;
  }
  @media screen and (max-width:1000px) and (min-width:768px)
  {
    height: 140vh;
  }
 
`
//#region Devider
const Devider=styled.div`
  font:600 40px/100px cursive;
  text-align:center;
  //margin-bottom:20px;
  
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
  height: 3px;
  width: 10vw;
  border-radius: 10px;
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

const Wrap=styled.div`
  display: flex;
  justify-content: center;

  //position: relative;
  p{
    display: flex;
    height: 10vh;
    flex-direction: column;
    justify-content: center;
    //background-color: red;
    font-weight: 600;
    font-size: 30px;
    //font-family: 'Bebas Neue', cursive;
    text-align: center;
    width: 50vw;
    color:white;
    span{
      color:#f6b911;
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
    left: 50%;
    right: 50%;
    @media screen and (max-width:1024px) and (min-width:600px)
    {
      height:30px;
      left: 50%;
      right: 50%;
    }
    
`