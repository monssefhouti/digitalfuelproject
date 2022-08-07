import React from 'react';
import styled from 'styled-components'
function SocialMedia(props) {
    return (
        <Container>
            <Wrap>
                <p id="Follow">Keep Updated by Following Us on :</p>
                <Socialmedia>
                    <img src="/Images/SocialMedia/facebook.png" alt="" id="fb"/>
                    <img src="/Images/SocialMedia/linkedin.png" alt="" id="in"/>
                    <img src="/Images/SocialMedia/twitter.png" alt=""  id="tw"/>
                </Socialmedia>
            </Wrap>
        </Container>
    );
}

export default SocialMedia;

const Container=styled.div`
    display: flex;
    width: 100vw;
    height:30vh ;
    background-image: url("/images/pattern_background.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-color: #081945;
  @media screen and (min-width: 1024px) and (max-width: 1351px)
  {
  &{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
  @media screen and (min-width: 900px) and (max-width: 1024px)
  {
    &{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 900px)
  {
    &{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  
`
const Wrap=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  #Follow{
    color: white;
    align-self: center;
    align-content: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 100px;
    margin-left: 2vh;
    margin-right: 10vh;
  }
  @media screen and (min-width: 1351px) and (max-width: 1691px)
  {
    #Follow{
      font-size: 60px;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1351px)
  {
    &{
      display: flex;
      flex-direction: column;
      justify-content: center;
      
    }
    #Follow
    {
      font-size: 60px;
      
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1024px)
  {
    &{
      display: flex;
      flex-direction: column;
      justify-content: center;

    }
    #Follow
    {
      font-size: 60px;

    }
  }
  @media screen and (min-width: 768px) and (max-width: 900px)
  {
    &{
      display: flex;
      flex-direction: column;
      justify-content: center;

    }
    #Follow
    {
      font-size: 50px;

    }
  }
  
`
const Socialmedia=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img
  {
    height: 15vh;
    margin-right: 2vh;
    cursor: pointer;
    border: 5px solid rgba(255,255,255,0.3);
    
    &:hover{
      border: 3px solid white;
      border-radius: 30px;
      transition-duration: 1s;
    }
  }
  #fb,#in
  {
    border-radius: 30px;
  }
  #tw{
    border: 5px solid rgba(255,255,255,0.3);;
    border-radius: 70px;
    &:hover{
      border: 3px solid white;
    }
  }
`