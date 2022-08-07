import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function ServicesBlocs() {
    return (
        <Container>
           <Fade left>
                <Wrap className="WrapDev">
                    <img src="/images/programming.png"/>
                    <span>
                        Web Development
                    </span>
                    <p id="WebDev">
                    Modern websites need to be responsive and fully functional at all sizes. We develop all of our sites with a mobile first approach and ensure that our code quality is clean, organized and performant. Already have a design but need it developed? We’re here to help!
                    </p>
                </Wrap>
           </Fade>
            <Fade right>
                <Wrap >
                    <img src="/images/bullhorn.png"/>
                    <span>
                        Social Media Marketing
                    </span>
                    <p id="SocialMedia">
                    The Hunter team will create and launch professionally designed advertisements utilizing the optimal strategies for the success of your company. Once your advertisements are live, we will monitor their metrics and adjust our strategies to ensure your ad campaigns grow with your business.
                    </p>
                </Wrap>
            </Fade>
            <Fade top>
                <Wrap className="WrapHost">
                    <img src="/images/launch.png"/>
                    <span>
                        Perfect Hosting
                    </span>
                    <p id="Hosting">
                        We deliver high quality hosting security for your company. With constant automatic updates keeping your site updated and secure at all times.
                    </p>
                </Wrap>
                <Wrap className="WrapWeb">
                    <img src="/images/monitoring.png"/>
                    <span>
                        Website Maintenance
                    </span>
                    <p id="Websites">
                        We can help you and giving you peace-of-mind, because it gives you access to a support tech when you need one.  you also get weekly website updates, security patches, website speed monitoring and quarterly website tune-ups.  All these and more are available with each of our packages.
                    </p>
                </Wrap>
            </Fade>

            
           
        </Container>
    )
}

export default ServicesBlocs

const Container=styled.div`
margin-top:30px;
display:grid;
grid-template-columns:repeat(4, minmax(0, 1fr));
grid-gap:10px;

  @media screen and (max-width:1373px) and (min-width:1067px)
  {
    //1373
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
  @media screen and (max-width:1067px) and (min-width:768px)
  {
    //1373
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
  @media screen and (max-width:1052px)
  {
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
`
const Wrap=styled.div`
    display:flex;
    align-items:center;
    //position: relative;
    flex-direction:column;
    margin-left: 5vh;
  //margin-right: 5vh;
    margin-top: 5vh;
    width:20vw;
    overflow-x: hidden;
    border:2px solid #3b486b;
    border-radius:10px;
    box-shadow:rgb(0 0 0 / 69%) 0px 15px 30px -10px, rgb(0 0 0 / 50%) 0px 16px 2px -20px;
    background-color:#0a1b46;
    img
    {
        width:90px;
        height:90px;
        padding: 10px 10px;
    }
    span{
        color:white;
        background-color:rgba(117,126,151,0.2);
        padding:10px 18px;
        border-radius:10px;
    }
    p{
      margin: 0;
      padding: 0;
    }
  @media screen and (max-width:1373px) and (min-width:1067px)
  {
    //1373
    width: 40vw;
  }
  @media screen and (max-width:1067px) and (min-width:768px)
  {
    
    &{
      width: 40vw;
      //margin-right: 5vh;
    }
  }
  @media screen and (max-width:1052px)
  {
    &{
      width: 40vw;
      margin-right: 5vh;
    }
  }
    #WebDev{
       
      color:white;
      
        margin:18px 10px;
        line-height: 3.5vh;
        text-align:justify-all;
        text-align:center;
    }
  #SocialMedia{

    color:white;
    
    margin:18px 10px;
    line-height: 3vh;
    text-align:justify-all;
    text-align:center;
  }
  #Hosting{

    color:white;
   
    margin:18px 10px;
    
    text-align:justify-all;
    text-align:center;
    line-height: 40px;
  }
  #Websites
  {
    color:white;
    
    margin:18px 10px;
    line-height: 3vh;
    text-align:justify-all;
    text-align:center;
    //line-height: 40px;
  }
  &:hover
  {
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transition-duration:1s;
    border: 2px solid white;
  }
`
