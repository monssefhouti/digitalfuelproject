import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function FeedbackRSS() {
    return (
        <Container>
            <Fade left>
                <span> Be one of our FRIENDS</span>
            </Fade>
            <Wrap>
                <Fade bottom>
                    <input type="email" className="EmailAddress" placeholder="exemple@mailaddress.com"/>
                </Fade>
                <Fade right>
                    <p>Subscribe</p>
                </Fade>
            </Wrap>
        </Container>
    )
}

export default FeedbackRSS
//#region Styling

const Container=styled.div`
  display: flex;
  width: 100vw;
  height: 25vh;
  justify-content: center;
  align-items: center;
  background-image: url("/images/feedback.jpg");
  background-position: right;
  background-attachment: fixed ;
  background-size:cover;
  background-repeat: no-repeat;
  span{
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-size: 100px;
    margin-left: 15vh;
  }
  @media screen and (max-width:1067px) and (min-width:768px)
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
      font-size: 70px;
    }
  }
`
const Wrap=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  .EmailAddress
  {
    width: 20vw;
    height: 8vh;
    outline: none;
    border-radius: 10px;
    margin-left: 5vw;
    font-size: 20px;
    padding: 10px 15px;
    border:2px solid white;
    color: white;
    background-color: rgba(126,126,126,0.5);
    
    &:hover
    {
      border:2px solid #3b486b;
      transition-duration: 1s;
    }
    &::placeholder
    {
      color: white;
    }
  }

  p{
    color: white;
    background-color: #0a1b46;
    box-shadow:rgb(0 0 0 / 69%) 0px 15px 30px -10px, rgb(0 0 0 / 50%) 0px 16px 2px -20px;
    padding: 20px 38px;
    text-transform: uppercase;
    border: 2px solid rgba(117,126,151,0.2);
    letter-spacing: 2px;
    font-size: 20px;
    margin-left: 10px;
    border-radius: 10px;
    cursor: pointer;
    &:hover
    {
      border: 2px solid white;
      transition-duration: 1s;
    }
  }
 
  @media screen and (max-width:1067px) and (min-width:768px)
  {
    display: flex;
    //flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
     
      flex-direction: column;
      font-size: 30px;
      text-align: center;
      margin-left: 5vh;
    }
    .EmailAddress
    {
      width: 40vw;
    }
    p{
      display: flex;
    }
  }
 
`
//#endregion