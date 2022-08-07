import React from 'react';
import styled from 'styled-components'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
function Copyright(props) {
    const Styling={
        marginRight:"0.5vh",
        marginLeft:"0.5vh"
    }
    return (
            <Copyrights>
                <p id="copy">
                    Made with
                    <FontAwesomeIcon icon={faHeart} color="white" style={Styling}/>
                    By
                    <a href="https://www.instagram.com/ssef_ti/" target="_blank"> Monssef HOUTI</a>
                </p>
            </Copyrights>
    );
}

export default Copyright;


const Copyrights = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: #e40000;
  margin-bottom: 0;
  width: 100vw;
  #copy{
    color: white;
    margin-top: 2vh;
    text-transform: uppercase;
    font-family: 'Kanit', sans-serif;
    a{
      text-decoration: none;
      color:white;
      font-family: 'Kanit', sans-serif;
      &:hover{
        color:#4494e4;
      }
    }
  }
  
`