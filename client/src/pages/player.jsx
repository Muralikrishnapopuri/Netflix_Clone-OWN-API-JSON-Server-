import React from 'react'
import styled from 'styled-components';
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import video from '../assets/video.mp4';
import './netflix.css';
export default function Player() {
    const navigate = useNavigate();
  return (
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={() => navigate(-1)}/> 
            </div>
            <video src={video} autoPlay loop controls></video>
        </div>
    </Container>
  )
}

const Container = styled.div`
.player {
   width : 100vw;
   height : 100vh;
   .back {
      position : absolute;
      padding : 2rem;
      z-index : 1 ;
      svg {
        font-size : 2rem ;
        cursor : pointer ;
      }
      video {
         width :100%;
         height : 100%;
         object-fit : cover ;
      }
   }
}
`;